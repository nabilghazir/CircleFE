import { Stack } from "@mui/material"
import { ProfileCard } from "../../components/sidebar/profile-card"
import { SuggestedCard } from "../../components/sidebar/suggested-card"
import { MetaCard } from "../../components/sidebar/meta-card"


export const SideBar = () => {

    return (
        <Stack
            style={{
                padding: "20px",
                gap: "10px"
            }}>
            <ProfileCard />
            <SuggestedCard />
            <MetaCard />
        </Stack>
    )
}
