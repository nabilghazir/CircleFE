import { Button, Stack, Typography } from "@mui/material"
import { NavList } from "../../components/navbar/nav-list"
import customTheme from "../../theme/theme"
import { PostModal } from "../../components/modal/create-post"
import { useState } from "react"
import { Icon } from "@iconify/react/dist/iconify.js"




export const Nav = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <Stack padding={"20px"}>
            <Typography style={{
                marginBottom: "25px",
                fontSize: "50px",
                fontWeight: "600",
                color: customTheme.palette.primary.main,
            }}>
                circle
            </Typography>
            <NavList />
            <Button
                variant="contained"
                color="primary"
                onClick={handleOpenModal}
                sx={{
                    fontWeight: 700,
                    borderRadius: '50px',
                    bgcolor: '#005E0E',
                    marginTop: "20px",
                    '&:hover': {
                        bgcolor: '#04A51E',
                    },
                }}
            >
                Create Post
            </Button>
            <PostModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
            <Button
                sx={{
                    width: "120px",
                    color: customTheme.palette.primary.main,
                    gap: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "240px",
                    "&:hover":
                    {
                        bgcolor: "transparent",
                    }
                }}>
                <Icon
                    icon="mdi:logout" />
                Log Out
            </Button>
        </Stack>
    )
}

