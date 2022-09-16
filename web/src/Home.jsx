import React, { useState, useEffect } from "react";
import {
    Box,
    Flex,
    Stack,
    Spacer,
    Image,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Container,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Spinner,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react';
import { ChevronDownIcon } from "@chakra-ui/icons";
import Create from "./components/Create";
import NotificationList from "./components/NotificationList";
import DataDisplay from "./components/DataDisplay";



export default function ({ user, supabase }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [loading, setLoading] = useState(false);
    const [notificationLoading, setNotificationLoading] = useState(false);
    const [notifications, setNotifications] = useState([]);

    const handleError = (error) => {
        if (error) alert(JSON.stringify(error));
    }
    const handleCreate = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const payload = {
            email: user.email,
            coin: data.get('coin'),
            metric: data.get('metric'),
            value: parseFloat(data.get('value')),
            change: data.get('change') === "+" ? true : false,
        }
        setLoading(true);
        const { data: res, error } = await supabase
            .from('notifications')
            .insert([payload]);
        setLoading(false);
        handleError(error);
        setNotifications((prev) => ([...prev, ...res]))
    };
    const handleSignout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            alert(error);
        }
        else {
            window.location.reload();
        }
    }

    const loadNotifications = async () => {
        setNotificationLoading(true);
        const { data, error } = await supabase.from('notifications').select();
        handleError(error)
        setNotifications([...data]);
        setNotificationLoading(false);
    };
    const handleRemove = async (payload) => {
        setNotificationLoading(true);
        const { error } = await supabase
            .from('notifications')
            .delete()
            .match({ ...payload });
        handleError(error);
        loadNotifications();
        setNotificationLoading(false);

    };

    useEffect(() => {
        loadNotifications();
    }, []);


    const [dataLoading, setDataLoading] = useState(false);
    const [marketData, setMarketData] = useState({});
    const onShowCryptoData = async (id) => {
        setDataLoading(true);
        try {
            const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&price_change_percentage=1h`);
            const list = await res.json();
            setMarketData(list[0]);
            onOpen();
        }
        catch (e) {
            alert(JSON.stringify(e));
        }

        setDataLoading(false);
    }

    return <>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Latest Market Data</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {dataLoading ? <Spinner /> : <DataDisplay {...marketData} />}
                </ModalBody>
            </ModalContent>
        </Modal>
        <Box as="nav" borderBottom={1}
            borderStyle='solid'
            borderColor='gray.200'
            minH={'60px'}
            bgGradient="linear(to-r, gray.100,gray.50)"
            mb={2}

        >
            <Flex py={{ base: 4 }} wrap="wrap" spacing={2}
                px={{ base: 4 }}>
                <Image src="logo.png" width={{ base: "100%", md: "9%" }} objectFit="contain" />
                <Spacer />

                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}
                        bgGradient="linear(to-r, cyan.700,cyan.800)"
                        color={'white'}
                        _hover={{
                            bgGradient: "linear(to-r, cyan.800,cyan.900)"
                        }}
                        _active={{
                            bgGradient: "linear(to-r, cyan.800,cyan.900)"
                        }}
                    >
                        {user.email}
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={handleSignout}>Sign Out</MenuItem>

                    </MenuList>
                </Menu>



            </Flex>

        </Box>

        <Container maxW="90%">
            <Stack spacing={6}>

                <Create isLoading={loading} onSubmit={handleCreate} onShowCryptoData={onShowCryptoData} />
                <NotificationList notifications={notifications} isLoading={notificationLoading} onRemove={handleRemove} />
            </Stack>
        </Container>
    </>
}