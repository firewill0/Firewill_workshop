(
    HashMap = function () {
        this.map = new Array();
    },
    HashMap.prototype = {
        put: function (key, value) {
            this.map[key] = value;
        },
        putMultiple: function (getarray) {
            for (i in getarray) {
                let key = getarray[i][0];
                let value = getarray[i][1];
                this.map[key] = value;
            }
        },
        get: function (key) {
            return this.map[key];
        },
        getAll: function () {
            return this.map;
        },
        clear: function () {
            this.map = new Array();
        },
        getKeys: function () {
            let keys = new Array();
            for (i in this.map) {
                keys.push(i);
            }
            return keys;
        }
    }
)