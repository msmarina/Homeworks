function calcAge(birthdate) {
    var age;
    //past info
    var pyear = parseInt(input.substring(6, 10));
    var pmonth = parseInt(input.substring(3, 5)) - 1;
    var pday = parseInt(input.substring(0, 2));

    //today info

    today = new Date();
    year = today.getFullYear();
    month = today.getMonth();
    day = today.getDate();

    if (moth < pmonth) {
        age = year - pyear - 1;
    } else if (month > pmonth) {
        age = year - pyear;
    } else if (month === pmonth) {
        if (day < pday) {
            age = year - pyear - 1;
        } else if (day > pday) {
            age = year - pyear;
        } else if (day === pday) {
            age = year - pyear;
        }
    }
    if (month === pmonth && day === pday) {
        return "Happy Birthday!";
    }
}