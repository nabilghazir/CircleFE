import { Avatar, Button, FormControl, Input, Stack, TextField } from "@mui/material"
import customTheme from "../../theme/theme"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useState } from "react";


export const CreatePost = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Stack
            sx={{
                padding: "10px 20px",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
                borderBottom: "1px solid " + customTheme.palette.grey[600],
            }}>
            <Avatar
                src="https://i.pinimg.com/originals/82/4d/b0/824db05450ed6305253092e8aedb329f.jpg"
                sx={{
                    width: "50px",
                    height: "50px"
                }} />
            <FormControl
                fullWidth
                sx={{
                    border: "none",
                    color: customTheme.palette.common.white
                }}>
                <TextField
                    variant="standard"
                    placeholder="What is happening?!"
                    multiline
                    rows={2}
                    InputProps={{
                        disableUnderline: true,
                        sx: {
                            color: customTheme.palette.common.white,
                            resize: "none"
                        }
                    }}
                    sx={{
                        width: "100%",
                        border: "none",

                    }}
                />
            </FormControl>
            <Input
                type="file"
                id="file-upload"
                sx={{ display: "none" }}
            />
            <label
                htmlFor="file-upload"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Icon
                    icon={isHovered ? "mdi:file-image-plus" : "mdi:file-image-plus-outline"}
                    style={{
                        fontSize: "35px",
                        cursor: "pointer",
                        color: customTheme.palette.primary.main
                    }}
                />
            </label>
            <Button
                variant="contained"
                color="primary"
                sx={{
                    fontWeight: 700,
                    borderRadius: "50px",
                    bgcolor: "#005E0E",
                    "&:hover": {
                        bgcolor: "#04A51E",
                    },
                }}
            >
                Post
            </Button>
        </Stack>
    )
}
