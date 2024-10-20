import { Box, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Nav } from '../layout/sidebar/navbar'
import { SideBar } from '../layout/sidebar/sidebar'
import customTheme from '../theme/theme'



const base = () => {
  return (
    <Stack
      flexDirection={'row'}
      sx={{
        height: "100vh",
        width: "100vw",

      }}>
      <Box flex={0.75}>
        <Nav />
      </Box>

      <Box
        flex={1.8}
        borderLeft={"1px solid"}
        borderRight={"1px solid"}
        borderColor={customTheme.palette.grey[600]}>
        <Outlet />
      </Box>

      <Box flex={1.1}>
        <SideBar />
      </Box>
    </Stack>
  )
}

export default base