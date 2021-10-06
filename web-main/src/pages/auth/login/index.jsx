import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useStyletron } from 'baseui';
import { Display3, H4 } from 'baseui/typography';
import { Block } from 'baseui/block';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';
import { useFormik } from 'formik';

import { login } from '@/store/user/user.action';

const mapStateToProps = ({ dispatch }) => ({ dispatch });

const LoginPage = ({ dispatch }) => {
	const navigate = useNavigate();
	const [css, theme] = useStyletron();

	const loginForm = useFormik({
		initialValues: {
			username: '',
			password: ''
		},
		onSubmit: (values) => {
			dispatch(login(values.username, values.password));
			navigate('/');
		}
	});

	return (
		<div className="max-w-screen-lg mx-auto h-screen flex items-center justify-center">
			<Block display="block">
				<Display3
					className={css({
						marginBottom: theme.sizing.scale600
					})}
				>
					NekoToko POS
				</Display3>
				<H4>Login</H4>
				<form onSubmit={loginForm.handleSubmit}>
					<FormControl label="Username">
						<Input
							id="username"
							value={loginForm.values.username}
							onChange={loginForm.handleChange}
						/>
					</FormControl>
					<FormControl label="Password">
						<Input
							id="password"
							type="password"
							value={loginForm.values.password}
							onChange={loginForm.handleChange}
						/>
					</FormControl>

					<Button type="submit">Login</Button>
				</form>
			</Block>
		</div>
	);
};

export default connect(mapStateToProps)(LoginPage);
