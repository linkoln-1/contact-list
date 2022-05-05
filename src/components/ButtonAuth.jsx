import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useState } from "react";
import { List, ListItem, Popover } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import { authReset } from "../redux/actions";

const useStyle = makeStyles({
  button: {
    background: "#1976d2",
    color: "#fff",
    width: "93px",
    height: "40px",
    borderRadius: "200px",
    textTransform: "none",
    boxShadow: "0 1px 3px 0 rgb(38 38 38 / 50%)",
    position: "absolute",
    padding: "none",
    zIndex: "2",
    right: "20px",
    top: "10px",
    fontSize: "14px",
    lineHeight: "16px",
    fontWeight: "800",

    "&:hover": {
      background: "#115293",
    },
  },

  fullList: {
    width: "auto",
  },

  avatar: {
    width: "45px",
    height: "45px",
    zIndex: "200",
    cursor: "pointer",
    transition: "0.5s",

    "&:hover": {
      boxShadow: "0px 0px 2px 15px rgba(112, 112, 112, 0.1)",
    },
    "&:active": {
      boxShadow: "0px 0px 2px 15px rgba(71, 71, 71, 0.3)",
      transition: "0.5s",
    },
  },
  root: {
    width: 200,
  },
  icon: {
    width: "15px",
  },
  text: {
    fontSize: "16px",
  },
});

function ButtonForAuth() {
  const dispatch = useDispatch();
  const classes = useStyle();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(authReset());
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : false;
  return (
    <Box style={{ float: "right" }} className="mt-1">
      {
        <Box>
          <Avatar className={classes.avatar} onClick={handleClick} />

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            style={{ marginTop: "5px" }}
          >
            <List component="nav" className={classes.root}>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}></React.Fragment>
              ))}
              <ListItem button onClick={handleLogout}>
                <ListItemIcon className={classes.icon}>
                  <ExitToApp />
                </ListItemIcon>
                <ListItemText secondary="Выход" className={classes.text} />
              </ListItem>
            </List>
          </Popover>
        </Box>
      }
    </Box>
  );
}

export default ButtonForAuth;
