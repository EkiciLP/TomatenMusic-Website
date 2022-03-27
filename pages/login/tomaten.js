import Head from 'next/head'
import { NavBar } from '../../components/navbar'
import NoSSR from '../../components/no_ssr'
import { root_style } from '../../js/style'
import { try_login } from '../../js/tmtn_api'

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
							
							if (event.target.elements.password.value == "" || event.target.elements.username.value == "") {
								alert("Please fill in both the username and password fields!");
								return;
							}

							localStorage.setItem("tmtn_username", event.target.elements.username.value);
							localStorage.setItem("tmtn_password", event.target.elements.password.value);

							try_login(event.target.elements.username.value, event.target.elements.password.value).then(res => {
								console.log(res);
								localStorage.setItem("tmtn_token", res.token);
								localStorage.setItem("tmtn_login_time", Date.now());
								location.href = "/";
							}).catch(err => {
								console.log(err);
								alert("Wtf? Something went wrong! " + err);
							})
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
