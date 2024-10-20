import { Button, Card, CardContent, CardHeader, CardMedia, Stack, Typography } from "@mui/material"
import customTheme from "../../theme/theme"


export const ProfileCard = () => {
    return (
        <Card
            style={{ backgroundColor: customTheme.palette.background.paper }}
            sx={{ position: "relative", }}
        >
            <CardHeader
                title={
                    <Typography style={{
                        fontSize: "20px",
                        color: customTheme.palette.common.white
                    }}>
                        My Profile
                    </Typography>
                }
            />

            <CardMedia
                component="img"
                src="https://img.freepik.com/premium-photo/red-gradient-background_1271337-787.jpg"
                sx={{
                    padding: "15px",
                    height: "120px",
                    borderRadius: "25px",
                }}
            />
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                sx={{
                    position: "absolute",  // Set position to absolute
                    top: "110px",           // Adjust this value to move it down from the top of the card
                    padding: "20px",
                }}
            >
                <CardMedia
                    component="img"
                    src="https://i.pinimg.com/originals/82/4d/b0/824db05450ed6305253092e8aedb329f.jpg"
                    sx={{
                        width: "75px",
                        borderRadius: "50px",
                        marginLeft: "15px",
                        marginBottom: "30px",
                        outline: "4px solid " + customTheme.palette.background.paper
                    }}
                />

                <Button
                    sx={{
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        border: "1px solid",
                        borderColor: customTheme.palette.common.white,
                        color: customTheme.palette.common.white,
                        borderRadius: "50px",
                        fontSize: "13px",
                        marginTop: "20px",
                        padding: "5px 10px",
                        "&:hover": {
                            bgcolor: customTheme.palette.grey[500]
                        }
                    }}>
                    Edit Profile
                </Button>
            </Stack>
            <CardContent
                sx={{
                    padding: "20px",
                }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: "22px",
                        marginTop: "15px",
                        fontWeight: "600",
                    }}>
                    John Doe
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontsize: "15px",
                        color: customTheme.palette.grey[500],
                    }}>
                    @johndoe
                </Typography>
                <Typography
                    variant="body1">
                    Bio nya ygy
                </Typography>

                <Stack
                    sx={{
                        marginTop: "5px",
                        flexDirection: "row",
                        gap: "10px",
                    }}>

                    <Typography
                        variant="body1"
                        sx={{
                            display: "flex",
                            gap: "5px",
                            fontSize: "15px",
                        }}>
                        0 <Typography
                            variant="body1"
                            sx={{
                                fontSize: "15px",
                                color: customTheme.palette.grey[500],
                            }}>
                            follower
                        </Typography>
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            display: "flex",
                            gap: "5px",
                            fontSize: "15px",
                        }}>
                        0 <Typography
                            variant="body1"
                            sx={{
                                fontSize: "15px",
                                color: customTheme.palette.grey[500],
                            }}>
                            following
                        </Typography>
                    </Typography>
                </Stack>
            </CardContent>

        </Card>
    )
}
