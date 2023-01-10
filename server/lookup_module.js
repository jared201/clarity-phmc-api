module.exports = {
    get_lookup: function (callback) {
        const fs = require('fs');
        const path = require('path');
        const lookup_file = path.join(__dirname, './data/lookup.json');
        fs.readFile(lookup_file, 'utf8', function (err, data) {
            if (err) {
                console.log(err);
                return;
            }
            callback(data);
        });
    }

}