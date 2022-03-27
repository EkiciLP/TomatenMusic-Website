export function try_login(username, password) {
	return new Promise((resolve, reject) => {
		fetch("https://api.tomatentum.net/api/Users/authenticate", {
			method: "POST",
			body: JSON.stringify({
				username: username,
				password: password
			}),
			headers: {
				"content-type": "application/json"
			}
		}).catch(err => {
			reject(err);
		}).then(res => res.status == 200 ? res.json() : reject("Login failed!")).then(res => {
			resolve(res);
		});
	});
}