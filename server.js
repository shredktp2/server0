var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var app = require('express').createServer(),
	twitter = require('ntwitter'),
	jsonfile = require('jsonfile'),
	fs = require('fs'),
	cronjob = require('cron').CronJob;

app.get('/', function(req, res) {
  res.send('hello world');
});


app.listen(server_port, server_ip_address, function() {
	console.log( "Listening on " + server_ip_address + ", server_port ");
});
console.log('\u0e23\u0e35\u0e25\u0e48\u0e32');

/*new cronjob('0 54 20 * * *', function() {
	var date = new Date().toDateString();
	var file = process.env.OPENSHIFT_DATA_DIR +"/tweets_"+ date +".json";
	var count = 0;

	var twit = new twitter({
		consumer_key: 'oCJMD8RsD2tLXZmlvubD9pIfg',
		consumer_secret: 'da3c724ozRUsZsg2MVrGNOBCisJ8ssSKOpYSuKxvb3gu8LGPi7',
		access_token_key: '1872179137-bORd018hRmxqwnU3w04IsdSO3ZD05vRbxY6F7D0',
		access_token_secret: 'LGhx0s0FmhvVbBwd4g65uXfSayvxlYHOdXFjWjVeMQE5U'
	});

	twit.stream('statuses/filter', { track:[ "#theFaceThailandseason2", "theFaceThailand", '#TeamCris',
						 '#TeamLukkade', '#TeamBee', '#theFaceThailand',
						'theFaceThailandseason2', 'TeamCris', 'TeamLukkade',
						'TeamBee', 'theFaceThailand' ] , language: "th"}, function(stream) {
		stream.on('data', function(data) {
			count++;
			console.log("===========" + count + " Tweets Downloaded ===========");
			fs.appendFile(file, JSON.stringify(data) +"\n", function(err) {
				if (err) throw err;
			});
		});
		stream.on('destroy', function(response) {
			console.log("finish");
		});
		setTimeout(stream.destroy, 300000);
	});
}, null, true, 'Asia/Bangkok');*/
