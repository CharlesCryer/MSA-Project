import "./Navbar.css";
import NavbarButton from "./NavbarButton/NavbarButton";
import {
  IconPencil,
  IconSettings,
  IconGraph,
  IconUser,
} from "@tabler/icons-react";
const Navbar = () => {
  return (
    <div className="navbar">
      <NavbarButton text="Summary" icon={<IconGraph />} link="/summary" />
      <NavbarButton text="Subjects" icon={<IconPencil />} link="/subjects" />
      <NavbarButton text="Settings" icon={<IconSettings />} link="/settings" />
      <NavbarButton text="Sign out" icon={<IconUser />} link="/signout" />
    </div>
  );
};

export default Navbar;
