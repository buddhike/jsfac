jsfac.module('dashboard', ['diagnostics'], function (register) {

    register('fooWidgetViewModel', ['eventLog'], function (eventLog) {
        var count = 0;
        return {
            click: function () {
                eventLog.log({
                    source: 'fooWidget',
                    message: 'Click ' + ++count + ' on fooWidgetViewModel'
                });
            }
        };
    });

});

