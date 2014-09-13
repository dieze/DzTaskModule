Modernizr.load({
    test: Modernizr.inputtypes.date,
    nope: [
        'http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js',
        'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.7/jquery-ui.min.js',
        '/dzuser/vendor/jquery-ui/themes/base/jquery-ui.css',
    ],
    complete: function () {
        $('input[type=date]').datepicker({
            dateFormat: 'dd/mm/yy'
        });
    }
});