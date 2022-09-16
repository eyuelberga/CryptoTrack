import React from "react";
import {
    Box,
    Heading,
    Stack,
    Spinner
} from '@chakra-ui/react';

import Notification from "./Notification";

export default function ({ notifications = [], onRemove, isLoading }) {
    return <Stack spacing={4}>
        <Box borderBottom={1}
            borderStyle='solid'
            borderColor='gray.200'><Heading color="gray.500" >Your Notifications {isLoading && <Spinner />}</Heading>
        </Box>
        {notifications.length < 1 && <Heading textAlign="center" color="gray.300">Nothing Here!</Heading>}
        {notifications.map((props) => (<Notification key={props.id} isLoading={isLoading} {...props} onRemove={() => { onRemove({ ...props }) }} />))}


    </Stack>
}