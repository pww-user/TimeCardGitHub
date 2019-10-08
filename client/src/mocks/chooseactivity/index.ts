export let mock_chooseactivity = {
 back: async function back(params) {
 this
 .go("chooseproject");
 },
 Group_save: async function Group_save(params) {
 await this.go("timeentry");
 }
};
