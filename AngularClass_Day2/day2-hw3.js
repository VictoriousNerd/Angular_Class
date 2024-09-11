var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek["Monday"] = "Monday";
    DaysOfWeek["Tuesday"] = "Tuesday";
    DaysOfWeek["Wednesday"] = "Wednesday";
    DaysOfWeek["Thursday"] = "Thursday";
    DaysOfWeek["Friday"] = "Friday";
    DaysOfWeek["Saturday"] = "Saturday";
    DaysOfWeek["Sunday"] = "Sunday";
})(DaysOfWeek || (DaysOfWeek = {}));
var today = DaysOfWeek.Wednesday;
console.log(today);
