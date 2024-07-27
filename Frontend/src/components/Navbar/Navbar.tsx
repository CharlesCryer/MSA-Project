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
      <NavbarButton text="Summary" icon={<IconGraph />} />
      <NavbarButton text="Subjects" icon={<IconPencil />} />
      <NavbarButton text="Settings" icon={<IconSettings />} />
      <NavbarButton text="Sign out" icon={<IconUser />} />
    </div>
  );
};

export default Navbar;
