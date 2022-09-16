import React, { useState } from "react";
import {
    Box,
    Input,
    Button,
    Select,
    FormControl,
    FormHelperText,
    Heading,
    Text,
    Link,
    Stack
} from '@chakra-ui/react';
import coins from "../coins";
import { METRICS } from "../constants";
export default function ({ onSubmit, isLoading = false, onShowCryptoData }) {
    const [metric, setMetric] = useState(Object.keys(METRICS)[0]);
    const [coin, setCoin] = useState('bitcoin');

    return <Box p={4} rounded="md" bgGradient="linear(to-b, gray.100,gray.50)" as="form" onSubmit={onSubmit}>
        <Stack spacing={4}>
            <Box borderBottom={1}
                borderStyle='solid'
                borderColor='gray.400'><Heading color="gray.600" textAlign="center">Get Notified</Heading></Box>
            <Stack direction={{ base: "column", md: "row" }} align="baseline">
                <Heading size="md" minW={{ base: "100%", md: "20%" }}>Send me an email when the</Heading>
                <FormControl bgGradient="linear(to-b, cyan.700,cyan.800)" p={2} rounded="lg">

                    <Select bg="gray.100" name="metric" value={metric} onChange={(e) => { setMetric(e.target.value) }} isRequired>
                        {Object.keys(METRICS).map((k) => (<option key={k} value={k}>{METRICS[k]}</option>))}
                    </Select>
                    <FormHelperText color="white">Market metric </FormHelperText>
                </FormControl>


                <Heading size="md">for</Heading>

                <FormControl bgGradient="linear(to-b, cyan.700,cyan.800)" p={2} rounded="lg">
                    <Stack direction="row" align="baseline">
                        <Select bg="gray.100" name="coin" value={coin} onChange={(e) => { setCoin(e.target.value) }} isRequired>
                            {Object.keys(coins).map((k) => {
                                const { id, name } = coins[k];
                                return <option key={id} value={id}>{name}</option>
                            })}
                        </Select>
                        <Button colorScheme="yellow" size="md" onClick={() => { onShowCryptoData(coin) }}>Latest Data</Button>
                    </Stack>
                    <FormHelperText color="white">Cryptocurrency</FormHelperText>

                </FormControl>
            </Stack>


            <Stack direction={{ base: "column", md: "row" }} align="baseline">
                <Heading size="md">is</Heading>

                <FormControl bgGradient="linear(to-b, cyan.700,cyan.800)" p={2} rounded="lg">

                    <Select name="change" bg="gray.100" isRequired>
                        <option value="+">Greater than</option>
                        <option value="-">Less than</option>
                    </Select>
                    <FormHelperText color="white">Change</FormHelperText>

                </FormControl>

                <FormControl bgGradient="linear(to-b, cyan.700,cyan.800)" p={2} rounded="lg">

                    <Input bg="gray.100" type="number" step="any" name="value" placeholder={metric && metric.includes("percentage") ? "Enter percentage" : "Enter USD value"} isRequired />
                    <FormHelperText color="white">Base value</FormHelperText>

                </FormControl>

            </Stack>
            <Button isLoading={isLoading} width="50%" alignSelf="center"
                bgGradient="linear(to-r, cyan.700,cyan.800)"
                color={'white'}
                _hover={{
                    bgGradient: "linear(to-r, cyan.800,cyan.900)"
                }}
                _active={{
                    bgGradient: "linear(to-r, cyan.800,cyan.900)"
                }}
                type="submit">Save</Button>
        </Stack>
        <Text>Data provided by <Link href="https://www.coingecko.com/">CoinGecko</Link></Text>
    </Box>
};