import React from 'react';
import { Avatar, AvatarBadge, AvatarFallbackText, AvatarImage, Box } from '@gluestack-ui/themed';


export default function AvatarUser() {
    return (
        // Avatar
        < Box >
            <Avatar bgColor="$indigo600">
                <AvatarFallbackText>Ronald Richards</AvatarFallbackText>
                <AvatarImage
                    source={{
                        uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                    }}
                />
                <AvatarBadge
                    sx={{
                        _dark: {
                            borderColor: "$black",
                        },
                    }}
                />
            </Avatar>
        </Box >
    )
}