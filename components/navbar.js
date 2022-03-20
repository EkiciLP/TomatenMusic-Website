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
				is_logged_in: false
			},

			show_mobile_selector: false
		};
	}

	render() {
		return (
			<div style={
				{
					marginBottom: "1rem"
				}
			}>
				<nav style={
					{
						position: "sticky",
						top: 0,
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						padding: "1rem 1.5rem",
						fontSize: "1.5rem",
						color: "var(--color)",
						backgroundColor: "var(--bg-color)"
					}
				}>
					<a href="/" style={
						{
							textDecoration: "none",
							// padding: ".5rem 1rem",
							color: "var(--text-color)",
						}
					}><img src="/logo.png" className="hide-large" style={
						{
							width: "100%",
							height: "3rem",
							marginTop: ".25rem"
						}
					}/>
					<img src="/logo_big.png" className="hide-small" style={
						{
							width: "100%",
							height: "3rem",
							marginTop: ".25rem"
						}
					}/></a>
					<div style={
						{
							display: "flex",
							width: "100%",
						}
					}>
						<div className="hide-large" style={
							{
								width: "100%",
							}
						}>
							<p style={
								{
									padding: "1rem 1rem",
									textAlign: "center",
								}
							} onClick={
								event => {
									this.state.show_mobile_selector = !this.state.show_mobile_selector;
									this.setState(this.state);
								}
							}>☰</p>
						</div>
						<div className="links hide-small" style={
							{
								width: "100%",
								justifyContent: "space-between",
								display: "flex"
							}
						}>
							<div />
							<div>
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

				<div style={
					{
						position: "sticky",
						width: "100%",
						display: this.state.show_mobile_selector ? "block" : "none",
					}
				}>
					<ul style={
						{
							boxShadow: "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
							width: "100%",
							overflow: "hidden"
						}
					}>
						{ this.state.links.map(link => {
							return (
								<li style={
									{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										padding: "1rem 1.5rem",
										fontSize: "1.5rem",
										color: "var(--text-color)",
										backgroundColor: "var(--bg-color)",
										cursor: "pointer",
										transition: "all .2s ease-in-out"
									}
								} onClick={
									event => {
										event.preventDefault();
										window.location.href = link.href;
									}
								}>
									{link.name}
								</li>
							);
						}) }
					</ul>
				</div>
			</div>
		);
	}
}