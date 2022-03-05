import Head from 'next/head'
import { NavBar } from '../components/navbar'
import NoSSR from '../components/no_ssr'
import { root_style } from '../js/style'

export default function Home() {
	return (
		<NoSSR>
			<div className="container" style={root_style}>
				<Head>
					<title>Home</title>
					<link rel="icon" href="/favicon.ico" />
					<link rel="stylesheet" href="/style.css" />
				</Head>

				<NavBar />

				<p>
					Text bla bla bla lol
				</p>
			</div>
		</NoSSR>
	)
}
