import React from "react";

export class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			links: [
				{
					name: "Home",
					href: "/"
				},
				{
					name: "About",
					href: "/about"
				}
			],

			login: {
				avatar_url: "https://pfps.gg/assets/pfps/4504-nezukodemonform.png",
				name: "GayFish",
				is_logged_in: true
			},

			a_style: {
				marginLeft: ".8rem",
				border: "1px solid var(--color)",
				borderRadius: "1rem",
				padding: ".5rem 1rem",
				textDecoration: "none",
				color: "var(--color)",
				display: "inline-block",
			}
		};
	}

	render() {
		return (
			<nav style={
				{
					position: "sticky",
					top: 0,
					display: "flex",
					// alignItems: "center",
					justifyContent: "space-between",
					padding: "1rem 1.5rem",
					fontSize: "1.5rem",
					color: "var(--color)",
					backgroundColor: "var(--bg-color)",
					marginBottom: "1rem"
				}
			}>
				<a href="/" style={
					{
						textDecoration: "none",
						padding: ".5rem 1rem",
						color: this.state.color
					}
				}>TomatenMusic (aka logo lol)</a>
				<div style={
					{
						display: "flex"
					}
				}>
					<div className="links">
						{ this.state.links.map(link => {
							return (
								<a key={link.href} href={link.href} style={this.state.a_style}>
									{link.name}
								</a>
							);
						})}
					</div>


					{ this.state.login.is_logged_in ? (
						<img src={this.state.login.avatar_url} alt={this.state.login.name} style={
							{
								width: "3rem",
								height: "3rem",
								borderRadius: "50%",
								marginLeft: ".5rem",
							}
						} onClick={event => {
							event.preventDefault();
							window.location.href = "/account";
						}}/>
					) : (
						<a style={this.state.a_style}>Login</a>
					)}
				</div>
			</nav>
		);
	}
}