console.log("hello from main.js");
var async = require('async');
var ads1x15 = require('./ads1x15');
var chip = 0; //0 for ads1015, 1 for ads1115
var adc = new ads1x15(chip); //optionally i2c address as (chip, address) but only if addr pin NOT tied to ground...
var samplesPerSecond = '920'; // see index.js for allowed values for your chip
var progGainAmp = '4096'; // see index.js for allowed values for your chip

setInterval(function(){
	if(!adc.busy)
	{
		async.series({
		    ai0:function(readAnalogCallback){
				adc.readADCSingleEnded( 0, progGainAmp, samplesPerSecond, function(err, data) {
					if (err) {
			            readAnalogCallback(err);
			        } else {
			            readAnalogCallback(null, data);
			        }
				});
			},
		    ai1:function(readAnalogCallback){
				adc.readADCSingleEnded( 1, progGainAmp, samplesPerSecond, function(err, data) {
					if (err) {
			            readAnalogCallback(err);
			        } else {
			            readAnalogCallback(null, data);
			        }
				});
			},
		    ai2:function(readAnalogCallback){
				adc.readADCSingleEnded( 2, progGainAmp, samplesPerSecond, function(err, data) {
					if (err) {
			            readAnalogCallback(err);
			        } else {
			            readAnalogCallback(null, data);
			        }
				});
			},
		    ai3:function(readAnalogCallback){
				adc.readADCSingleEnded( 3, progGainAmp, samplesPerSecond, function(err, data) {
					if (err) {
			            readAnalogCallback(err);
			        } else {
			            readAnalogCallback(null, data);
			        }
				});
			}
		}, 
		function(err, results){ 
			//publish results array to pubnub
		    console.log(results);
		});
	}
}, 5000);