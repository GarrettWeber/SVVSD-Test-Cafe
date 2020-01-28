import { Role } from "testcafe";
import LoginPage from "../PageObjects/login-page";
import ConfigurationManager from "../Configuration/configuration";

const configManager = new ConfigurationManager();
const loginPage = new LoginPage();
const genericPassword = 'p@ssw0rd';

export const garrettUser = {
	username: 'garrett',
	password: genericPassword,
	initials: "﷽﷽",
	role: Role(
		configManager.serverUrl,
		async t => {
			await loginPage.login('garrett', genericPassword);
		},
		{ preserveUrl: true }
	)
};

export const viewer = {
	username: 'viewer',
	password: 'viewer',
	initials: "VV",
	role: Role(
		configManager.serverUrl,
		async t => {
			await loginPage.login("viewer", "viewer");
		},
		{ preserveUrl: true }
	)
};
