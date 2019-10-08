export let mock_timeentry = {
    newProject: function newProject(params) {
        this.go("chooseproject");
    },
    timeComments: function timeComments(params) {
        this.go("commentsdaily");
    },
    Entries_comments: function Entries_comments(params) {
        this.go("commentsdaily");
    },
    submit: function submit(params) {
        this.go("timeview");
    },
    save: function save(params) {
        this.go("timeentry");
    }
};
