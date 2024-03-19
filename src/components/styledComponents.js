import { AppBar, Box, Drawer, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAppBar = styled(AppBar)(() => ({
  padding: "10px 60px",
  backgroundColor: "#EEF8FC !important",
  boxShadow: "0 5px rgba(0, 0, 0, 0.06)",
  zIndex: 999,
  position: "sticky",
  top: 0,
  left: 0,
  "& a": {
    textDecoration: "none",
    color: "#0F8FA9",
    fontSize: "20px",
  },
  "@media (max-width: 799px)": {
    padding: "20px",
  },
}));

export const StyledDrawer = styled(Drawer)(() => ({
  width: "0%",
  "& a": {
    textDecoration: "none",
    color: "#0F8FA9",
    fontSize: "20px",
  },
  "& .MuiPaper-root ": {
    backgroundColor: "#EEF8FC ",
  },
}));

export const Paragraph = styled(Typography)(() => ({
  fontSize: "14px",
}));
