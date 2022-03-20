import Head from 'next/head'
import { NavBar } from '../../components/navbar'
import NoSSR from '../../components/no_ssr'
import { root_style } from '../../js/style'

export default function Login() {
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
						Welcome to the TomatenTum Login page!
					</h1>
					<br />
					<br />
					<button onClick={
						event => {
							event.preventDefault();
							window.location.href += '/discord';
						}
					}>
						<p>Discord login</p>
					</button>
					<br />
					<button onClick={
						event => {
							event.preventDefault();
							window.location.href += '/tomaten';
						}
					}>
						<p>Tomaten login</p>
					</button>
				</div>
			</div>
		</NoSSR>
	)
}
