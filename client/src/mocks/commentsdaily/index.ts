export let mock_commentsdaily = {
 back: async function back(params) {
 await this.go("timeentry");
 },
 cancel: async function cancel(params) {
 await this.go("timeentry");
 },
 save: async function save(params) {
 await this.go("timeentry");
 },
 goComments: async function goComments(params) {
 this.data.selectedDate = this.data.allDefaultDays[params.index];
 await this.go("commentsdaily");
 }
};
