import React from "react";
import {
    Heading,
    Avatar,
    Box,
    Text,
    Button,
    Link,
    Badge,
    useColorModeValue,
    Stat,
    StatLabel,
    StatNumber,
    StatArrow,
    StatGroup,
} from '@chakra-ui/react';


import { METRICS } from "../constants";

export default function ({ name, image, symbol, ...rest }) {
    const statArrow = (value) => (value > 0 ? 'increase' : 'decrease');

    return (
        <Box
            textAlign="center"
            p={6}>
            <Avatar
                size="xl"
                src={image}
                alt={name}
                mb={4}
            />
            <Heading fontSize="2xl" fontFamily="body">
                {name}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} mb={4}>
                {symbol}
            </Text>


            <StatGroup>

                {Object.keys(METRICS).map((key) => (<Stat minW="100%" key={key} m={2} p={2} bg="gray.50" rounded="lg">
                    <StatLabel> {key !== "current_price" && <StatArrow type={statArrow(rest[key])} />}{METRICS[key]}</StatLabel>
                    <StatNumber>{rest[key]} {key.includes('percentage') ? "%" : "USD"}</StatNumber>

                </Stat>))
                }

            </StatGroup>
        </Box>
    )

}