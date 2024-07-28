import { Button } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { FC, ReactNode } from "react";
import "./NavbarButton.css";
import { Link } from "react-router-dom";
interface propTypes {
  text: string;
  icon: ReactNode;
  link: string;
}
const NavbarButton: FC<propTypes> = ({ text, icon, link }) => {
  const { hovered, ref } = useHover();

  return (
    <div ref={ref} className="btn-container">
      <Link to={link} style={{ textDecoration: "none" }}>
        <Button
          fullWidth
          className="navbar-btn"
          justify="center"
          variant="subtle"
          color="gray"
          size="lg"
          rightSection={
            /* span hides the icon without disrupting normal flow */
            hovered ? (
              icon
            ) : (
              <span style={{ visibility: "hidden" }}>{icon}</span>
            )
          }
        >
          {text}
        </Button>
      </Link>
    </div>
  );
};

export default NavbarButton;
