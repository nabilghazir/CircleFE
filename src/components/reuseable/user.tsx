import { Avatar, Button, Stack, Typography } from "@mui/material"
import customTheme from "../../theme/theme"

export const UserFollow = () => {
    return (
        <Stack
            sx={{
                flexDirection: "row",
                paddingX: "20px",
                paddingBottom: "20px",
                justifyContent: "space-between",
            }}>

            <Stack
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    alignItems: "center",
                }}>
                <Avatar
                    src="https://i.pinimg.com/originals/82/4d/b0/824db05450ed6305253092e8aedb329f.jpg" />
                <Stack>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: "15px",
                        }}>
                        John Doe
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: "15px",
                            color: customTheme.palette.grey[500],
                        }}>
                        @johndoe
                    </Typography>
                </Stack>
            </Stack>

            <Button
                sx={{
                    border: "1px solid",
                    borderColor: customTheme.palette.common.white,
                    color: customTheme.palette.common.white,
                    borderRadius: "50px",
                    fontSize: "13px",
                    padding: "5px 10px",
                    "&:hover": {
                        bgcolor: customTheme.palette.grey[500]
                    }
                }}> Follow</Button>
        </Stack >
    )
}
