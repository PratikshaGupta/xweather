var request = require("request"),
  Q = require("q")

exports.getForecast = function(city) {
  // Third party api to fetch forecast details
  var deferred = Q.defer();
  var options = {
    method: 'GET',
    url: 'https://api.apixu.com/v1/forecast.json?key=e880786a8ba64ab483454258170908&q=' + city
  };
  request(options.url, function(error, response, body) {
    if (error) {
      deferred.reject(error);

    } else {
      deferred.resolve(body)
    }
  });
  return deferred.promise;
}