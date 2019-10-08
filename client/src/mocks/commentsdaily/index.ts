export let mock_commentsdaily = {
    back: function back(params) {
        this.go("timeentry");
    },
    cancel: function cancel(params) {
        this.go("timeentry");
    },
    save: function save(params) {
        this.go("timeentry");
    },
    goComments: function goComments(params) {
        this.data.selectedDate = this.data.allDefaultDays[params.index];
        this.go("commentsdaily");
    }
};
