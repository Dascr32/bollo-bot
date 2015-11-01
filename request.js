var http = require('http');

var STATUS = {
    host: '104.197.97.146',
    path: '/bollo_webbakeries/status.php'
};

var  BAKERIES_ALL = {
    host: '104.197.97.146',
    path: '/bollo_web/api/v1/bakeries/bakery.php?all'
};

exports.getBakeries = function(callback) {
    http.get(BAKERIES_ALL, function(response) {
        var body = '';
        response.on('data', function(d) {
            body += d;
        });

        response.on('end', function() {
            var parsedData = JSON.parse(body);
            callback ({
                list: parsedData.bakeries,
                code: parsedData.code
            });
        });
    });
};
