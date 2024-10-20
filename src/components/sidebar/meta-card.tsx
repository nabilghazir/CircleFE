import { Icon } from "@iconify/react/dist/iconify.js"
import { Card, Stack, Typography } from "@mui/material"
import customTheme from "../../theme/theme"


export const MetaCard = () => {
    return (
        <Card
            sx={{
                bgcolor: customTheme.palette.background.paper,
                padding: "6px 20px",
            }}>
            <Stack>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: "15px",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px"
                    }}>
                    Developed by Nabil Ghazi
                    <Icon fontSize={"20px"} icon="mdi:dot" />
                    <Icon fontSize={"20px"} icon="mdi:github" />
                    <Icon fontSize={"20px"} icon="mdi:linkedin" />
                    <Icon fontSize={"20px"} icon="mdi:facebook" />
                    <Icon fontSize={"20px"} icon="mdi:instagram" />
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        fontSize: "12.5px",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        color: customTheme.palette.grey[500]
                    }}>
                    Powered By <img src="https://dumbways.id/assets/images/brandred.png" width={"20px"} />
                    Dumbways Indonesia  <Icon fontSize={"20px"} icon="mdi:dot" /> #1 Coding Bootcamp
                </Typography>
            </Stack>
        </Card>
    )
}
