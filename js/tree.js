
var TreeView = function () {


'use strict';


    return {
        init: function () {
            var DataSourceTree = function (options) {
                this._data = options.data;
                this._delay = options.delay;
            };
            DataSourceTree.prototype = {
                data: function (options, callback) {
                    var self = this;
                    setTimeout(function () {
                        var data = $.extend(true, [], self._data);
                        callback({
                            data: data
                        });
                    }, this._delay)
                }
            };
            var treeDataSource3 = new DataSourceTree({
                data: [{
                    name: 'Theme <div class="tree-actions"></div>',
                    type: 'folder',
                    additionalParameters: {
                        id: 'F11'
                    }
                }],
                delay: 400
            });
            $('#FlatTree3').tree({
                dataSource: treeDataSource3,
                loadingHTML: '<img src="img/input-spinner.gif"/>',
            });
        }
    };
}();