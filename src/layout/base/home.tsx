import { Box, Typography } from "@mui/material"
import { CreatePost } from "../../components/home/create-post-home"
import { Thread } from "../../components/reuseable/thread"



export const Home = () => {
    return (
        <Box>
            <Typography
                sx={{
                    fontSize: "30px",
                    padding: "20px",
                }}>
                Home
            </Typography>
            <CreatePost />
            <Thread />
        </Box>
    )
}
