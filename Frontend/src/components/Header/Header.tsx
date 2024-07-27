import { IconSchool } from "@tabler/icons-react";
import "./Header.css";
const Header = () => {
  return (
    <>
      <h2 className="logo-header">StudyTracker</h2>
      <IconSchool size={40} title="hello" stroke={2} />
    </>
  );
};

export default Header;
