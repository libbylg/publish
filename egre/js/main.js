/**
 * 全局的日历表，用于绘制日历表格
 * @type {{table: Array}}
 */
var global_calendar = {
    //@formatter:off
    table: [
        "2017-06-25", "2017-06-26", "2017-06-27", "2017-06-28", "2017-06-29", "2017-06-30", "2017-07-01",
        "2017-07-02", "2017-07-03", "2017-07-04", "2017-07-05", "2017-07-06", "2017-07-07", "2017-07-08",
        "2017-07-09", "2017-07-10", "2017-07-11", "2017-07-12", "2017-07-13", "2017-07-14", "2017-07-15",
        "2017-07-16", "2017-07-17", "2017-07-18", "2017-07-19", "2017-07-20", "2017-07-21", "2017-07-22",
        "2017-07-23", "2017-07-24", "2017-07-25", "2017-07-26", "2017-07-27", "2017-07-28", "2017-07-29",
        "2017-07-30", "2017-07-31", "2017-08-01", "2017-08-02", "2017-08-03", "2017-08-04", "2017-08-05",
    ],
    //@formatter:on

    weeks: [
        false,
        false,
        true,
        false,
        false,
        false,
    ],

    year: 2017,

    month: 7,

    index_begin: 6,

    index_end: 36,

    /**
     * 根据索引获取日历表的日期对应的Date对象
     * @param index
     * @returns {*}
     */
    dateOfIndex: function (index) {
        if ((index < 0) || (index >= this.table.length)) {
            return null;
        }
        var v = Date.parse(this.table[index]);
        var date = new Date(v);
        return date;
    },
    /**
     * 指定一个日期对象，查询在table表中的索引的位置，如果不在本月的索引表中返回-1
     * @param date
     * @returns {number}
     */
    indexOfDate: function (date) {
        var dateString = String(date.getYear() + 1900) + '-';
        dateString += (date.getMonth() >= 10) ? String(date.getMonth()) : '0' + String(date.getMonth()) + '-';
        dateString += (date.getDate() >= 10) ? String(date.getDate()) : '0' + String(date.getDate());
        console.log("dateString:", dateString);
        for (var i = 0; i < this.table.length; i++) {
            if (dateString == this.table[i]) {
                console.log("indexOfDate:", i);
                return i;
            }
        }

        console.log("date:", date);
        console.log("indexOfDate:", -1);
        return -1;
    },
    /**
     * 查询本月的日历表总共有几周
     * @returns {number}
     */
    weeksOfMonth: function () {
        return Math.ceil(this.table.length / 7);
    },
    /**
     * 计算本月总共有几天
     * @returns {number}
     */
    daysOfMonth: function () {
        return ((this.index_end - this.index_begin) + 1);
    },
};

/**
 * 当前日志上显示的日期
 */
var global_sel = {
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
        calendar: global_calendar,
        sel: global_sel,
    },
    computed: {
        weeksOfMonth: function () {
            return this.calendar.weeksOfMonth();
        },
        name: function () {
            return "yyyyyyyyyyy";
        },
        /**
         * 当前选中的是第几周：从1开始计算
         * @returns {number}
         */
        selWeekIndex: function () {
            /**
             * 计算当前选中的是第几周
             */
            var d = new Date();
            d.setFullYear(this.sel.year, this.sel.month, this.sel.selday);
            // console.log("sel-date:", d)
            var index = this.calendar.indexOfDate(d);
            if (index < 0) {
                return -1;
            }

            var weekIndex = Math.ceil(index / 7);
            // console.log("index     :", index);
            // console.log("weekIndex :", weekIndex);

            return weekIndex;
        },
        isThisWeekSel: function () {
            if (this.calendar.year != this.sel.year) {
                return false;
            }

            if (this.calendar.month != this.sel.month) {
                return false;
            }


        },
    },
    methods: {
        dayOf: function (week, index) {
            var date = this.calendar.dateOfIndex((week - 1) * 7 + (index - 1));
            return String(date.getDate());
        }
    }
});


