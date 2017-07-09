/*********************************************************************************************************
 * 展示模块时，每行多少列
 * @type  {number}
 */
var colsize = 6;

/**
 * 全局的模块列表
 * @type {[*]}
 */
var global_modules = [
    {name: "AutoBackupPolicy", last_status: "success", publish_percent: 30},
];

/**
 * 全局模块索引：通过名字找到模块的索引
 * @type {{}}
 */
var global_indexs = {};

/**
 * 发布任务列表
 * @type {{: {: string}}}
 */
var global_tasks = {
    "AutoBackupPolicy": {
        title: "#123 修改了模块构建脚本，解决编译时报dl包找不到的问题",
        url: "http://isource.com/DigitalFoundry/AutoBackupPolicy/merge_request/123",
        create_at: "20170709T123437",
        merged_at: "20170710T094505",
        closed_at: "",
        author: {
            id: "",
            name: "",
        },
        source: {
            addr: "",
            branch: "",
        },
        target: {
            addr: "",
            branch: "",
        },
        build: {
            seq: 2345,
            addr: "http://10.75.110.243/cimaster.do?id=2345",
            start_at: "20170709T123437",
            end_at: "",
            result: "Building",
        },
        logs: ["1\n","2\n"],
    },
};

/**
 * 所有模块的统计摘要
 * @type {{}}
 */
var global_summarys = {
    "AutoBackupPolicy": {
        success: 60,
        failure: 40,
        build_avg: 0,
        build_min: 0,
        build_max: 0,
    }
};

/**
 * 一些全局的状态选项
 * @type {{selname: string}}
 */
var global_status = {
    selname: "",
    logs: [""],
};


/*********************************************************************************************************
 * 选中模块的处理
 * @param module 模块的完整数据结构
 */
function select_module(module) {
    /**
     * 修改选中的模块
     */
    global_status.selname = module.name;

    /**
     * 更新所有模块的选中状态
     */
    global_modules_update_select_status();
}


/**
 * 更新所有模块的选中状态
 */
function global_modules_update_select_status() {
    for (var name in global_indexs) {
        var indexItem = global_indexs[name];
        if (name == global_status.selname) {
            indexItem.sel = true;
            continue
        }

        if (indexItem.sel) {
            indexItem.sel = false;
        }
    }
}

/**
 * 重建索引
 */
function global_indexs_init() {
    for (var i in global_modules) {
        var m = global_modules[i];
        if (null == global_indexs[m.name]) {
            global_indexs[m.name] = {
                index: i,
                sel: false,
            }
        }
    }
}

/**
 * 全局模块列表初始化
 */
function global_modules_init() {
    //@formatter:off
    global_modules = [
        {name: "AutoBackupPolicy",      last_status: "success", publish_percent:   3, addr:"http://www.baidu.com/AutoBackupPolicy"  },
        {name: "Collector",             last_status: "failure", publish_percent:  40, addr:"http://www.baidu.com/Collector" },
        {name: "ComplexCloudControl",   last_status: "success", publish_percent:  55, addr:"http://www.baidu.com/ComplexCloudControl"   },
        {name: "DIFF",                  last_status: "unknown", publish_percent:   0, addr:"http://www.baidu.com/DIFF"  },
        {name: "Install",               last_status: "unknown", publish_percent:   0, addr:"http://www.baidu.com/Install"   },
        {name: "UniInstallFramework",   last_status: "unknown", publish_percent:   0, addr:"http://www.baidu.com/UniInstallFramework"   },
        {name: "UpgradeManager",        last_status: "unknown", publish_percent:   0, addr:"http://www.baidu.com/UpgradeManager"    },
        {name: "ResourceManager",       last_status: "success", publish_percent: 100, addr:"http://www.baidu.com/ResourceManager"   },
        {name: "I2KAccess",             last_status: "success", publish_percent:   0, addr:"http://www.baidu.com/I2KAccess" },
        {name: "HealthCare",            last_status: "success", publish_percent:  99, addr:"http://www.baidu.com/HealthCare"    },
        {name: "HealthManager",         last_status: "success", publish_percent:  99, addr:"http://www.baidu.com/HealthManager" },
        {name: "UniAgentUpgradeTool",   last_status: "success", publish_percent:  99, addr:"http://www.baidu.com/UniAgentUpgradeTool"   },
        {name: "TemplateManager",       last_status: "success", publish_percent:  99, addr:"http://www.baidu.com/TemplateManager"   },
        {name: "UserTools",             last_status: "success", publish_percent:  99, addr:"http://www.baidu.com/UserTools" },
        {name: "UTM",                   last_status: "success", publish_percent:  99, addr:"http://www.baidu.com/UTM"   },
        {name: "DesignTool",            last_status: "success", publish_percent:  99, addr:"http://www.baidu.com/DesignTool"    },
        {name: "PlatformManager",       last_status: "success", publish_percent:  99, addr:"http://www.baidu.com/PlatformManager"   },
        {name: "ConfigService",         last_status: "success", publish_percent:  99, addr:"http://www.baidu.com/ConfigService" },
        {name: "iCheck",                last_status: "success", publish_percent:  99, addr:"http://www.baidu.com/iCheck"    },
        {name: "Foundation",            last_status: "success", publish_percent:  99, addr:"http://www.baidu.com/Foundation"    },
        {name: "IA",                    last_status: "success", publish_percent:  99, addr:"http://www.baidu.com/IA"    },
        {name: "ICM",                   last_status: "success", publish_percent:  99, addr:"http://www.baidu.com/ICM"   },
        {name: "NATS",                  last_status: "success", publish_percent:  99, addr:"http://www.baidu.com/NATS"  },
        {name: "OSpatch",               last_status: "success", publish_percent:  99, addr:"http://www.baidu.com/OSpatch"   },
        {name: "RreInstall",            last_status: "success", publish_percent:  99, addr:"http://www.baidu.com/RreInstall"    },
        {name: "SoftwareRepository",    last_status: "success", publish_percent:  99, addr:"http://www.baidu.com/SoftwareRepository"    },
        {name: "InterCloudService",     last_status: "success", publish_percent:  99, addr:"http://www.baidu.com/InterCloudService" },
        {name: "LightIaaS",             last_status: "success", publish_percent:  99, addr:"http://www.baidu.com/LightIaaS" },
        {name: "ScalingManager",        last_status: "success", publish_percent:  99, addr:"http://www.baidu.com/ScalingManager"    },
    ];
    //@formatter:on

    /**
     * 重建索引
     */
    global_indexs_init();
}

/**
 * 重新加载全局模块列表
 */
function global_modules_reload() {
    /**
     * 请求获取最新的模块状态
     * @type {[*]}
     */
        //@formatter:off
    var new_modules = [
        {name: "AutoBackupPolicy",      last_status: "success", publish_percent:  30},
        {name: "Collector",             last_status: "failure", publish_percent:  40},
        {name: "ComplexCloudControl",   last_status: "success", publish_percent:  55},
        {name: "DIFF",                  last_status: "unknown", publish_percent:   0},
        {name: "Install",               last_status: "unknown", publish_percent:   0},
        {name: "UniInstallFramework",   last_status: "unknown", publish_percent:   0},
        {name: "UpgradeManager",        last_status: "unknown", publish_percent:   0},
        {name: "ResourceManager",       last_status: "success", publish_percent: 100},
        {name: "I2KAccess",             last_status: "success", publish_percent:   0},
        {name: "HealthCare",            last_status: "success", publish_percent:  99},
        {name: "HealthManager",         last_status: "success", publish_percent:  99},
        {name: "UniAgentUpgradeTool",   last_status: "success", publish_percent:  99},
        {name: "TemplateManager",       last_status: "success", publish_percent:  99},
        {name: "UserTools",             last_status: "success", publish_percent:  99},
        {name: "UTM",                   last_status: "success", publish_percent:  99},
        {name: "DesignTool",            last_status: "success", publish_percent:  99},
        {name: "PlatformManager",       last_status: "success", publish_percent:  99},
        {name: "ConfigService",         last_status: "success", publish_percent:  99},
        {name: "iCheck",                last_status: "success", publish_percent:  99},
        {name: "Foundation",            last_status: "success", publish_percent:  99},
        {name: "IA",                    last_status: "success", publish_percent:  99},
        {name: "ICM",                   last_status: "success", publish_percent:  99},
        {name: "NATS",                  last_status: "success", publish_percent:  99},
        {name: "OSpatch",               last_status: "success", publish_percent:  99},
        {name: "RreInstall",            last_status: "success", publish_percent:  99},
        {name: "SoftwareRepository",    last_status: "success", publish_percent:  99},
        {name: "InterCloudService",     last_status: "success", publish_percent:  99},
        {name: "LightIaaS",             last_status: "success", publish_percent:  99},
        {name: "ScalingManager",        last_status: "success", publish_percent:  99},
    ];
    //@formatter:on


    /**
     * 更新所有的模块列表
     */
    for (var i in new_modules) {
        var indexItem = global_indexs[new_modules[i].name];
        if (null == indexItem) {
            global_modules.push(new_modules[i]);
            continue;
        }

        /**
         * 更新状态和百分比
         */
        var m = global_modules[indexItem.index];
        m.last_status = new_modules[i].last_status;
        m.publish_percent = new_modules[i].publish_percent;
    }


    /**
     * 重建索引
     */
    global_indexs_init();


    // console.log("sel:", selected_module_name);
}

/**
 * 更新日志列表
 */
function global_modules_update_log() {

}

/*********************************************************************************************************
 * 执行全局初始化
 */
global_modules_init();


/**
 * 设置定时器，定时更新模块的状态
 */
window.setInterval(global_modules_reload, 10 * 1000);

/**
 * 设置定时器，定时更新模块的日志状态
 */
window.setInterval(global_modules_update_log, 10 * 1000);


/**
 * 注册一个组件
 */
Vue.component("module-item", {
    props: ['module', 'index', 'status'],
    template: '' +
    '<div   :class="select_status()">' +
    '<p     :class="last_publish_status(module)" @click="select">{{module.name}}</p>' +
    '<p     :class="publish_style(module)"       @click="select">{{publish_text(module)}}</p>' +
    '</div>',

    methods: {
        select_status: function () {
            // console.log("this.index********************:", this.index);
            // console.log("selname:", this.status);
            if (this.module.name == this.status.selname) {
                return 'module-select-status';
            } else {
                return 'module-diselect-status';
            }
        },
        last_publish_status: function (module) {
            return ['module-button-left', 'module-last-publish-' + module.last_status];
        },
        publish_style: function (module) {
            var complate = ((0 == module.publish_percent) || (100 == module.publish_percent));
            if (complate) {
                return ['module-button-right', 'module-published', 'module-last-publish-' + module.last_status];
            } else {
                return ['module-button-right', 'module-publishing'];
            }
        },
        publish_text: function (module) {
            var complate = ((0 == module.publish_percent) || (100 == module.publish_percent));
            if (complate) {
                return ' ' + 'go';
            } else {
                return ' ' + String(module.publish_percent) + '%';
            }
        },
        select: function () {
            select_module(this.module);
            // console.log("------selname:", this.selname);
            // console.log("------select_module_name:", selected_module_name);
        },
    }
})


/*********************************************************************************************************
 * 模块展示面板
 */
var AppModuleTable = new Vue({
    el: '#app-module-table',
    data: {
        modules: global_modules,
        indexs: global_indexs,
        status: global_status,
        colsize: colsize,
    },

    computed: {
        rowsize: function () {
            return Math.ceil(this.modules.length / this.colsize);
        },
    },

    methods: {
        indexOfPos: function (rowpos, colpos) {
            return ((colpos - 1) * this.rowsize + (rowpos - 1));
        },
    }
})

var AppModuleDetial = new Vue({
    el: '#app-module-detial',
    data: {
        status: global_status,
        tasks: global_tasks,
        summarys: global_summarys,
    },
    computed: {
        module: function () {
            if (null == global_indexs[this.status.selname]) {
                return null;
            }

            return global_modules[global_indexs[this.status.selname].index];
        },
        task: function () {
            var m = this.module;
            return this.tasks[m.name];
        },
        summary: function () {
            var m = this.module;
            return this.summarys[m.name];
        },
        percent_need_show: function () {
            var t = this.summary;
            if (null == t) {
                console.log("(null == t)");
                return false;
            }

            console.log("(t.success + t.failure):", (t.success + t.failure));
            return (0 != (t.success + t.failure));
        },
        success_percent_style: function () {
            if (!this.percent_need_show) {
                return '';
            }

            var t = this.summary;
            var p = Math.ceil(t.success * 100 / (t.success + t.failure));
            return '{width:' + String(p) + '; background-color:green;}'
        },
        failure_percent_style: function () {
            if (!this.percent_need_show) {
                return '';
            }

            var t = this.task;
            var p = Math.ceil(t.failure * 100 / (t.success + t.failure));
            return '{width:' + String(p) + '; background-color:red;}'
        },
    },
    methods: {
        build_state: function () {
            var t = this.task;
            if (null == t) {
                return '';
            }

            if (null == t.build) {
                return '';
            }

            return t.build.result;
        },
        build_time: function () {
            var t = this.task;
            if (null == t) {
                return '';
            }

            if (null == t.build) {
                return '';
            }


            /**
             * 状态
             */
            var desc = '';

            /**
             * 构开始时间
             */
            if ((null == t.build.start_at) || ('' == t.build.start_at)) {
                desc += ' ';
            } else {
                desc += t.build.start_at;
            }

            /**
             * 时间段分隔符
             */
            desc += ' - ';

            /**
             * 构建完成时间
             */
            if ((null == t.build.end_at) || ('' == t.build.end_at)) {
                desc += 'later';
            } else {
                desc += t.build.end_at;
            }

            return desc;
        },
        task_log: function () {
            var t = this.task;
            if (null == t) {
                return '';
            }

            if (null == t.logs) {
                return '';
            }

            var s = '';
            for (var i in t.logs) {
                s += t.logs[i];
            }

            return s;
        }
    }

});
