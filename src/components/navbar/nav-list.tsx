import { Stack } from "@mui/material"
import { NavCompo } from "./nav-component"
import { NavItem } from "./nav-item"


export const NavList = () => {
    return (
        <Stack direction="column" gap={4} >
            {NavCompo.map((item, index) => {
                return <NavItem key={index} {...item} />
            })}
        </Stack>
    )
}
