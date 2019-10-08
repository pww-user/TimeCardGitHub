export let mock_chooseactivity = {
    back: function back(params) {
        this
            .go("chooseproject");
    },
    Group_save: function Group_save(params) {
        this.go("timeentry");
    }
};
