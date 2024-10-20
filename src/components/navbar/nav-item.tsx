import { NavLink } from "react-router-dom"
import { NavProps } from "./nav-props"
import { Icon } from "@iconify/react"
import { Box, Typography } from "@mui/material"
import customTheme from "../../theme/theme"

export const NavItem: React.FC<NavProps> = ({ path, name, icon }) => {
    return (
        <NavLink to={path} style={{ textDecoration: "none" }}  >
            {({ isActive }) => (
                <Box
                    className={`nav-list ${isActive ? "active" : ""}`}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        color: isActive ? customTheme.palette.common.white : customTheme.palette.grey[500],
                    }}>
                    <Icon
                        icon={isActive ? icon.active : icon.inactive}
                        style={{
                            fontSize: "25px",
                        }}
                    />
                    <Typography
                        style={{
                            fontSize: "20px"
                        }}>
                        {name}
                    </Typography>
                </Box>
            )}
        </NavLink>
    )
}
