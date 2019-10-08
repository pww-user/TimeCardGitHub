export let mock_menu = { home: async function home(params) {
 await this.go("Home");
 }, settings: async function settings(params) {
 await this.go("settings");
 } };
