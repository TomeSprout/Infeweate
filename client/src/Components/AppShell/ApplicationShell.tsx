import React, { forwardRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
	AppShell,
	Avatar,
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
import { Globe } from 'tabler-icons-react';

const data = [
  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'Bender Bending Rodríguez',
    value: 'Bender Bending Rodríguez',
    description: 'Fascinated with cooking',
  },

  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Carol Miller',
    value: 'Carol Miller',
    description: 'One of the richest people on Earth',
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    label: 'Homer Simpson',
    value: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
    label: 'Spongebob Squarepants',
    value: 'Spongebob Squarepants',
    description: 'Not just a sponge',
  },
];

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  image: string;
  label: string;
  description: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />

        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
);

type Locales = {
	id: number;
	city: string;
	state: string;
}

const ApplicationShell = () => {
	const theme = useMantineTheme();
	const [ opened, setOpened ] = useState(false);

	const data2 = ['sd', 'dsds', 'sdds']

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
						data={data2}
						icon={<Globe size={20} />}
						label="Where are you eating?"
						placeholder="Pick a location"
						radius="md"
						required
						size="md"
						variant="filled"
					/>

					<Select
						label="Choose employee of the month"
						placeholder="Pick one"
						itemComponent={SelectItem}
						data={data}
						searchable
						maxDropdownHeight={400}
						nothingFound="Nobody here"
						// filter={(value, item) =>
						// 	item.label.toLowerCase().includes(value.toLowerCase().trim()) ||
						// 	item.description.toLowerCase().includes(value.toLowerCase().trim())
						// }
					/>

					<form onSubmit={form.onSubmit((values) => console.log(values))}>
						
						<TextInput
							label='Email'
							placeholder='email@emailprovider.com'
							radius='md'
							required
							size='md'
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
