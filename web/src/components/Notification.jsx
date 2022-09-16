import React from "react";
import {
    Box,
    Text,
    Flex,
    Spacer,
    Button,
    Heading,
    Stack,
    Image
} from '@chakra-ui/react';

import { METRICS } from "../constants";
import coins from "../coins";

export default function ({ created_at, coin, metric, change, value, onRemove, isLoading }) {
    const isPercentage = metric.includes('percentage');
    return <Box my={2} p={4} rounded="md" bg="gray.50">
        <Flex align="baseline" justify="center" wrap="wrap" spacing={2}>
            <Stack>
                <Heading lineHeight="2" size="md">Notify me when the <Text rounded="md" as="span" bg="blue.100" p={1} mr={1}> {METRICS[metric]} </Text> for <Text rounded="md" as="span" bg="cyan.100" p={1} mr={1}> <Image display="inline" align="baseline" w={6} h={6} src={coins[coin].image} alt={coin} /> {coins[coin].name} </Text> is <Text rounded="md" as="span" bg={change ? "green.100" : "red.100"} p={1} mr={1}> {change ? "Greater than" : "Less than"}  {value} {isPercentage ? "%" : "USD"} </Text>  </Heading>
                <Text color="gray.500" size="sm">Created at: {new Date(created_at).toDateString()} </Text>
            </Stack>
            <Spacer />
            <Button isDisabled={isLoading} colorScheme="red" onClick={() => { if (confirm("Are you sure? This action is permanent")) onRemove(); }}>Remove</Button>

        </Flex>
    </Box>
}