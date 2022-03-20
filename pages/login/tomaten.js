import Head from 'next/head'
import { NavBar } from '../../components/navbar'
import NoSSR from '../../components/no_ssr'
import { root_style } from '../../js/style'

export default function Tomaten() {
	return (
		<NoSSR>
			<div className="container" style={root_style}>
				<Head>
					<title>Home</title>
					<link rel="icon" href="/favicon.ico" />
					<link rel="stylesheet" href="/style.css" />
				</Head>

				<NavBar />

				<div style={
					{
						alignItems: "center",
						justifyContent: "center",
						display: "flex",
						flexDirection: "column"
					}
				}>
					<h1>
						Welcome to the TomatenTum Tomaten Login page!
					</h1>
					<br />
					<br />
					<form style={
						{
							border: "4px solid black",
							padding: "10px",
							borderRadius: "10px",
							fontSize: "large",
						}
					} onSubmit={
						event => {
							event.preventDefault();
							alert(`Logging in as ${event.target.elements.username.value} with password ${event.target.elements.password.value}`);
						}
					}>
						<label>Username </label>
						<input type="text" name="username" />
						<br />
						<br />
						<label>Password </label>
						<input type="password" name="password" />
						<br />
						<br />
						<button style={
							{
								width: "100%"
							}
						}>Login</button>
					</form>
				</div>
			</div>
		</NoSSR>
	)
}
