/**
 *
 * @type {{vmpDir: string, version: string}}
 */
var global_taskflow = {
    vmpDir: "\\\\vmp\\xxxxx\\xxxx\\V600R001C01SPC400B310",
    version: "V600R001C01SPC400B310",
};

var global_rules = {
    steps: [
        "1. xxx",
        "2. xxx",
        "3. xxx",
    ],
    tips: [
        "提示1",
        "提示2",
    ],
};

/**
 * 正在排队的队列
 * @type {Array}
 */
var global_queue = [];

/**
 * 已经完成的任务的队列
 * @type {Array}
 */
var global_complated = [];

var global_context = {
    current_user: {
        userId: "100257437",
        userName: "刘刚",
    },
    deital: {
        shareDir: ""
    },
};


queue_reload();
complated_reload();


/**
 * 重新加载排队队列
 */
function queue_reload() {
    var newqueue = [
        {
            userId: "l00257437",
            userName: "刘刚",
            scarBegin: "20170506123459",
            status: "scaring",
            acceptor: "yuran",
            shareDir: "\\\\10.75.166.62\\scar\\xxxxx\\00001"
        },
        {
            userId: "m00234435",
            userName: "木龙",
            scarBegin: "20170506123459",
            status: "queuing",
            acceptor: "mucongchong",
        },
    ];


    global_queue = newqueue;
}

function complated_reload() {
    var newqueue = [
        {
            userId: "l00257437",
            userName: "刘刚",
            scarBegin: "20170506123459",
            status: "scaring",
            acceptor: "yuran",
            shareDir: "\\\\10.75.166.62\\scar\\xxxxx\\00001"
        },
        {
            userId: "m00234435",
            userName: "木龙",
            scarBegin: "20170506123459",
            status: "queuing",
            acceptor: "mucongchong",
        },
    ];


    global_complated = newqueue;
}

var get_status_string = function (task) {
    if ('queuing' == task.status) {
        return '排队中';
    } else if ('scaring' == task.status) {
        return '正在塞包';
    }
}

var AppTaskflow = new Vue({
    el: '#app-taskflow',
    data: {
        taskflow: global_taskflow,
        context: global_context,
        rules: global_rules,
    },
    computed: {},
    methods: {},
});

var AppTaskQueue = new Vue({
    el: '#app-task-queue',
    data: {
        taskflow: global_taskflow,
        queue: global_queue,
        context: global_context,
    },
    computed: {},
    methods: {
        task_status_string: function (task) {
            return get_status_string(task);
        }
    },
});


var AppTaskComplated = new Vue({
    el: '#app-task-complated',
    data: {
        complated: global_complated,
    },
    computed: {},
    methods: {
        task_status_string: function (task) {
            return get_status_string(task);
        }
    },
});
