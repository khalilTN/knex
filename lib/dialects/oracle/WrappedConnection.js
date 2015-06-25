var Promise = require('../../promise');

var WrappedConnection = module.exports = function(connection){
  this.connection = connection;
};

WrappedConnection.prototype.executeAsync = function(sql, bindParams, options){
  var self = this;
   return new Promise(function(resolve, reject) {
        self.connection.execute(sql, bindParams || [], options || {}, function(err, results) {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};






