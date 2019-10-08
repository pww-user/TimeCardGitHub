export let mock_timeview = {
 timeComments: async function timeComments(params) {
 await this.go("commentsdaily");
 },
 back: async function back(params) {
 await this.go("timeentry");
 }
};
