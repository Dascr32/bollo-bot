var http = require('http');

const STATUS = {
    host: 'bollo-server.bitnamiapp.com',
    path: '/bollo_web/api/v1/bakeries/status.php?id='
};

const  BAKERIES_ALL = {
    host: 'bollo-server.bitnamiapp.com',
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
    var STATUS_ID = STATUS;
    STATUS_ID.path = "/bollo_web/api/v1/bakeries/status.php?id=" + id;
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
