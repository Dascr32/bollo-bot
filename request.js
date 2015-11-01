var http = require('http');

var STATUS = {
    host: '104.197.97.146',
    path: '/bollo_web/api/v1/bakeries/status.php?id='
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
                code: parsedData.code,
                list: parsedData.bakeries,
                id: parsedData.id
            });
        });
    });
};

exports.getStatus = function(id, callback) {
    STATUS.path += id;
    http.get(STATUS, function(response) {
        var body = '';
        response.on('data', function(d) {
            body += d;
        });

        response.on('end', function() {
            var parsedData = JSON.parse(body);
            callback ({
                code: parsedData.code,
                progress: parsedData.progress,
                status: parsedData.status
            });
        });
    });
};
