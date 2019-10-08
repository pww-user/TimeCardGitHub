export let mock_timeentry = {
 newProject: async function newProject(params) {
 await this.go("chooseproject");
 },
 timeComments: async function timeComments(params) {
 await this.go("commentsdaily");
 },
 Entries_comments: async function Entries_comments(params) {
 await this.go("commentsdaily");
 },
 submit: async function submit(params) {
 await this.go("timeview");
 },
 save: async function save(params) {
 await this.go("timeentry");
 }
};
