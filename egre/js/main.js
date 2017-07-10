/**
 * 全局的日历表，用于绘制日历表格
 * @type {{table: Array}}
 */
var global_calendar = {
    //@formatter:off
    table: [
        "2017-06-25","2017-06-26","2017-06-27","2017-06-28","2017-06-29","2017-06-30","2017-07-01",
        "2017-07-02","2017-07-03","2017-07-04","2017-07-05","2017-07-06","2017-07-07","2017-07-08",
        "2017-07-09","2017-07-10","2017-07-11","2017-07-12","2017-07-13","2017-07-14","2017-07-15",
        "2017-07-16","2017-07-17","2017-07-18","2017-07-19","2017-07-20","2017-07-21","2017-07-22",
        "2017-07-23","2017-07-24","2017-07-25","2017-07-26","2017-07-27","2017-07-28","2017-07-29",
        "2017-07-30","2017-07-31","2017-08-01","2017-08-02","2017-08-03","2017-08-04","2017-08-05",
    ],
    //@formatter:on

    year: 2017,

    month: 7,

    index_begin: 6,

    index_end: 36,

    indexOfDay: function (day) {
        return ((day + this.index_begin) - 1);
    },
    weeksOfMonth: function () {
        return Math.ceil(this.table.length / 7);
    },
    daysOfMonth: function () {
        return ((this.index_end - this.index_begin) + 1);
    },
};

/**
 * 当前日志上显示的日期
 */
var global_cur = {
    year: 2017,
    month: 7,
    selday: 10,
};

/**
 * 当月的归档计划表
 */
var global_plan = {};

var AppCalendar = new Vue({
    el: '#app-calendar',
    data: {
        calendar: global_calendar
    },
});


