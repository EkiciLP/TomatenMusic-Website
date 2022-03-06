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
						// padding: ".5rem 1rem",
						color: "var(--text-color)",
					}
				}><img src="/logo.png" style={
					{
						width: "100%",
						height: "3rem",
						marginTop: ".25rem"
					}
				}/></a>
				<div style={
					{
						display: "flex"
					}
				}>
					<div className="links">
						{ this.state.links.map(link => {
							return (
								<button className="nav-button" onClick={
									event => {
										event.preventDefault();
										window.location.href = link.href;
									}
								}>
									{link.name}
								</button>
							);
						})}
					</div>


					{ this.state.login.is_logged_in ? (
						<img src={this.state.login.avatar_url} alt={this.state.login.name} style={
							{
								width: "3rem",
								height: "3rem",
								borderRadius: "50%",
								marginLeft: "1rem",
								marginTop: ".25rem"
							}
						} onClick={event => {
							event.preventDefault();
							window.location.href = "/account";
						}}/>
					) : (
						<div>
							<button className="nav-button" onClick={
								event => {
									event.preventDefault();
									window.location.href = "/login";
								}
							}>Login</button>
						</div>
					)}
				</div>
			</nav>
		);
	}
}