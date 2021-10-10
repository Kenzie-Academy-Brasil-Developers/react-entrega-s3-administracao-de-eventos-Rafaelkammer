import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router";

const Menu = () => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <MenuItem onClick={() => sendTo("/")}>Home</MenuItem>
          <MenuItem onClick={() => sendTo("/events")}>Events</MenuItem>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Menu;
