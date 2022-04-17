import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
	AppShell,
	Box, 
	Burger, 
	Button, 
	Checkbox, 
	Footer, 
	Group,
	Header, 
	MediaQuery, 
	Navbar, 
	Select, 
	Text, 
	TextInput, 
	useMantineTheme, 
} from '@mantine/core';
import { useForm } from '@mantine/form';

type Locales = {
	id: number;
	city: string;
	state: string;
}

const ApplicationShell = () => {
	const theme = useMantineTheme();
	const [ opened, setOpened ] = useState(false);

	const data = ['sd', 'dsds', 'sdds']

	const locationData: Locales[] = [
		{ id: 0, city: 'New York', state: 'NY' },
	];

	const form = useForm({
		initialValues: {
			email: '',
			termsOfService: false,
		},

		validate: {
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
		},
	});

	return (
		<Router>
			<AppShell
				styles={{
					main: {
						background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
					},
				}}
				navbarOffsetBreakpoint='sm'
				fixed
				navbar={
					<Navbar p='md' hiddenBreakpoint='sm' hidden={!opened} width={{ sm: 200, lg: 300 }}>
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
					<Footer height={60} p='md'>
						Application footer
					</Footer>
				}
				header={
					<Header height={70} p='md'>
						<div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
							<MediaQuery largerThan='sm' styles={{ display: 'none' }}>
								<Burger opened={opened} onClick={() => setOpened((o) => !o)} size='sm' color={theme.colors.gray[6]} mr='xl' />
							</MediaQuery>

							<Text>Application header</Text>
						</div>
					</Header>
				}
			>
				<Routes />
				DEFAULTS:
				Location: New York, NY

				<Box sx={{ maxWidth: 500 }} mx='auto'>
					
					<Select
						data={data}
						placeholder="Pick a location"
						label="Where are you eating?"
						variant="filled"
						radius="md"
						size="md"
						required
					/>

					<form onSubmit={form.onSubmit((values) => console.log(values))}>
						
						<TextInput
							required
							label='Email'
							radius='md'
							size='md'
							placeholder='email@emailprovider.com'
							{...form.getInputProps('email')}
						/>

						<Checkbox
							mt='md'
							label='Water balloons'
							{...form.getInputProps('termsOfService', { type: 'checkbox' })}
						/>

						<Group position='right' mt='md'>
							<Button type='submit'>Submit</Button>
						</Group>
						
						<Group position='right' mt='md'>
							<Button type='reset'>Reset</Button>
						</Group>

					</form>
				</Box>
			</AppShell>
		</Router>
	);
};

export default ApplicationShell;
