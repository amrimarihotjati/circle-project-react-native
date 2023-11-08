import { Box, Textarea } from "@gluestack-ui/themed"
import AvatarUser from "../components/AvatarUser"




export default function Home() {
    return (
        <Box w={"100%"} padding={2}>
            <Box display="flex" flexDirection="row" justifyContent="space-between" w={"70%"} gap={2}>
                <AvatarUser />
                <Box width={"100%"}>
                    <Textarea
                        bg="$grey200"
                        width={"100%"}
                    ></Textarea>
                </Box>
            </Box>
        </Box >
    )
}