export let mock_timeview = {
    timeComments: function timeComments(params) {
        this.go("commentsdaily");
    },
    back: function back(params) {
        this.go("timeentry");
    }
};
