import { Card, CardHeader, Typography } from "@mui/material"
import { UserFollow } from "../reuseable/user"


export const SuggestedCard = () => {
    return (
        <Card>
            <CardHeader
                title={
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: "20px"
                        }}>
                        Suggested for you
                    </Typography>
                } />
            <UserFollow />
            <UserFollow />
            <UserFollow />

        </Card>
    )
}
