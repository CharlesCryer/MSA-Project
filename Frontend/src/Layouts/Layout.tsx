import { Outlet } from "react-router-dom";
import { AppShell, Burger, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import "./Layout.css";
export default function Layout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Flex>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="lg" />
          <Header />
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
