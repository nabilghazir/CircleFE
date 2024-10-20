import { Icon } from "@iconify/react/dist/iconify.js"
import { Stack, Box, Avatar, Typography } from "@mui/material"


export const Thread = () => {
    return (
        <Box
            sx={{
                padding: "20px",
                borderBottom: "1px solid"
            }}>
            <Stack>
                <Avatar src="https://i.pinimg.com/originals/82/4d/b0/824db05450ed6305253092e8aedb329f.jpg" />
                <Typography>
                    John Doe
                </Typography>
                <Typography>
                    @johndoe
                    <Icon fontSize={"20px"} icon="mdi:dot" />
                    Count
                </Typography>

            </Stack>
        </Box>
    )
}
