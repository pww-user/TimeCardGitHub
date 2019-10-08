export let mock_chooseproject = {
 back: async function back(params) {
 await this.go("timeentry");
 },
 Group_chooseActivity: async function Group_chooseActivity(params) {
 await this.go("chooseactivity");
 }
};
