import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Modal, Box, Avatar, TextField, IconButton, Input, FormControl, Stack } from "@mui/material";
import { ModalProps } from "./modal-props/create-post";
import customTheme from "../../theme/theme";

export function PostModal({ isOpen, onClose }: ModalProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Stack
                sx={{
                    bgcolor: "background.paper",
                    padding: "20px",
                    borderRadius: 1,
                    width: "500px",
                    outline: "none",
                }}
            >
                <Box
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                    }}>
                    <IconButton
                        sx={{
                            fontSize: "10px",
                            width: "15px",
                            height: "15px",
                            padding: "10px",
                            border: "1px solid",
                            color: customTheme.palette.grey[500]
                        }}
                        onClick={onClose}
                    >
                        X
                    </IconButton>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                        gap: 1.5,
                        borderBottom: "1px solid",
                        borderColor: customTheme.palette.grey[600],

                    }}
                >
                    <Avatar
                        sx={{
                            width: 40,
                            height: 40,
                            bottom: 20
                        }}
                        src="https://as1.ftcdn.net/v2/jpg/05/31/08/88/1000_F_531088890_4evvH1LhLDpT2OLqvsp9ny6vyabFjeN2.jpg" />

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
                            rows={3}
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
                </Box>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    mt={2}>
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

                </Box>
            </Stack>
        </Modal>
    );
}
