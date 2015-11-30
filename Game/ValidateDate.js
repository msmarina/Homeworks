function validate(date) {
    var eighteenYearsAgo = moment().subtract(18, "years");
    var birthday = moment(date);

    if (!birthday.isValid()) {
        return "invalid date";
    } else if (eighteenYearsAgo.isAfter(birthday)) {
        return "okay, you're good";
    } else {
        return "sorry, no";
    }
}