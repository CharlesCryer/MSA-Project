import { Button } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { FC, ReactNode } from "react";
import "./NavbarButton.css";
interface propTypes {
  text: string;
  icon: ReactNode;
}
const NavbarButton: FC<propTypes> = ({ text, icon }) => {
  const { hovered, ref } = useHover();

  return (
    <div ref={ref} className="btn-container">
      <Button
        fullWidth
        className="navbar-btn"
        justify="center"
        variant="subtle"
        color="gray"
        size="lg"
        rightSection={
          /* span hides the icon without disrupting normal flow */
          hovered ? icon : <span style={{ visibility: "hidden" }}>{icon}</span>
        }
      >
        {text}
      </Button>
    </div>
  );
};

export default NavbarButton;
