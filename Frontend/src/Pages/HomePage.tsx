import { AppShell, Burger, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import "./HomePage.css";
export default function App() {
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

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}
