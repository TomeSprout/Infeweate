import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppShell, Navbar, Header, Footer, Text, MediaQuery, Burger, useMantineTheme } from '@mantine/core';

const ApplicationShell = () => {
	const theme = useMantineTheme();
	const [ opened, setOpened ] = useState(false);
	return (
		<Router>
			<AppShell
				styles={{
					main: {
						background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
					},
				}}
				navbarOffsetBreakpoint="sm"
				fixed
				navbar={
					<Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
						<Navbar.Section>
							<Text>Navbar Main</Text>
						</Navbar.Section>
						<Navbar.Section>
							<Text>Navbar Links</Text>
						</Navbar.Section>
						<Navbar.Section>
							<Text>Navbar Footer</Text>
						</Navbar.Section>
					</Navbar>
				}
				footer={
					<Footer height={60} p="md">
						Application footer
					</Footer>
				}
				header={
					<Header height={70} p="md">
						<div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
							<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
								<Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" color={theme.colors.gray[6]} mr="xl" />
							</MediaQuery>

							<Text>Application header</Text>
						</div>
					</Header>
				}
			>
				<Routes />
					<Text>Resize app to see responsive navbar in action</Text>
			</AppShell>
		</Router>
	);
};

export default ApplicationShell;
