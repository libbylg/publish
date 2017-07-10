/**
 * 全局的日历表，用于绘制日历表格
 * @type {{table: Array}}
 */
var global_calendar = {
    table: [
        //  x  x  x  x  x  x  1
        //  2  3  4  5  6  7  8
        //  9 10 11 12 13 14 15
        // 16 17 18 19 20 21 22
        // 23 24 25 26 27 28 29
        // 30 31
    ],

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


