import React, { useState } from "react";
import {
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Stack,
    Heading,
    Text,
    Flex,
    Spacer,
    Container,
    Input,
    Button,
    SimpleGrid,
    Image,
    Icon,

} from '@chakra-ui/react';
import { HamburgerIcon } from "@chakra-ui/icons";
import { AUTH_ACTIONS } from "./constants";

export default function ({ supabase }) {

    const [action, setAction] = useState(AUTH_ACTIONS.SIGNUP);
    const [loading, setLoading] = useState(false);

    const handleForm = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target)
        setLoading(true);
        switch (action) {
            case AUTH_ACTIONS.LOGIN:
                await handleSignIn(data);
                break;
            case AUTH_ACTIONS.LOGIN_MAGIC:
                await handleSignInMagicLink(data);
                break;
            case AUTH_ACTIONS.SIGNUP:
                await handleSignUp(data);
                e.target.reset();
                break;
            default:
                alert("Something went wrong!")

        }
        setLoading(false);
    }

    const handleError = (error) => {
        if (error) alert(JSON.stringify(error));
    }

    const handleSignInMagicLink = async (data) => {

        const { error } = await supabase.auth.signIn({
            email: data.get('email'),
        });
        handleError(error);

    }
    const handleSignIn = async (data) => {
        const { error } = await supabase.auth.signIn({
            email: data.get('email'),
            password: data.get('password'),
        });
        handleError(error);
    };
    const handleSignUp = async (data) => {
        const res = await supabase.auth.signUp({
            email: data.get('email'),
            password: data.get('password'),
        });
        handleError(res.error);
        alert("We have sent you a confirmation email. Please check your inbox.")
    };
    return (<Box>
        <Container
            as={SimpleGrid}
            maxW={'7xl'}
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 10, lg: 32 }}
            py={{ base: 10, sm: 20, lg: 32 }}>
            <Stack >
                <Image
                    alt='Logo'
                    objectFit={'contain'}
                    src={
                        'logo.png'
                    }
                />

                <Text bgGradient="linear(to-r, blue.800, cyan.800)"
                    backgroundClip="text" textAlign="center" fontWeight="bold" fontSize={{ base: 'md', sm: 'lg' }}>
                    Track your Cryptocurrencies and get instant email notification whenever they change
                </Text>

            </Stack>
            <Stack
                bg={'gray.50'}
                rounded={'xl'}
                p={{ base: 4, sm: 6, md: 8 }}
                spacing={{ base: 8 }}
                maxW={{ lg: 'lg' }}>

                <Flex >
                    <Heading
                        color={'gray.800'}
                        lineHeight={1.1}
                        fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                        {action}

                    </Heading>
                    <Spacer />
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <MenuList>
                            {Object.keys(AUTH_ACTIONS).filter((k) => (action !== AUTH_ACTIONS[k])).map((k) => (<MenuItem key={k} onClick={() => { setAction(AUTH_ACTIONS[k]) }} >
                                {AUTH_ACTIONS[k]}
                            </MenuItem>))}


                        </MenuList>
                    </Menu>
                </Flex>

                <Box as={'form'} mt={10} onSubmit={handleForm}>
                    <Stack spacing={4}>
                        <Input
                            required
                            name="email"
                            type="email"
                            placeholder="Email"
                            bg={'gray.100'}
                            border={0}
                            color={'gray.500'}
                            _placeholder={{
                                color: 'gray.500',
                            }}
                        />
                        {action !== AUTH_ACTIONS.LOGIN_MAGIC && <Input
                            required
                            name="password"
                            type="password"
                            placeholder="Password"
                            bg={'gray.100'}
                            border={0}
                            color={'gray.500'}
                            _placeholder={{
                                color: 'gray.500',
                            }}
                        />}
                    </Stack>
                    <Button isLoading={loading}
                        type="submit"
                        fontFamily={'heading'}
                        mt={8}
                        w={'full'}
                        bgGradient="linear(to-r, cyan.800,blue.800)"
                        color={'white'}
                        _hover={{
                            bgGradient: "linear(to-r, blue.800,cyan.800)"
                        }}
                    >
                        {action.includes("Login") ? "Login" : "Sign Up"}
                    </Button>
                </Box>
            </Stack>
        </Container>
    </Box>
    )
};