const fetch = require('node-fetch');
var localtunnel = require('localtunnel');
var express = require('express');
var app = express()
var bodyParser = require('body-parser')
const config = require("./config.json")
app.use(bodyParser());

var tunnel = localtunnel(config.port, {"subdomain":config.url}, function(err, tunnel) {
    if(err) process.exit(0);
    console.log(tunnel.url)
});

tunnel.on('close', function() {
    console.log("Tunnel closed")
    process.exit(0);
});

app.get('/shorten', function(req, res){
    console.log("Get Shortening")
});

app.post('/shorten', function(req, res){
    let args = req.body.text.split(" ")
    console.log("Shortening")
    if(!args[0] ||!args[1]){
        res.send('Missing arguments');
        return;
    }
    res.send('Attemping to shorten! WoOoOoOoOoOoT');
    fetch(`${config.yourl}?signature=${config.signature}&action=shorturl&format=json&url=${args[0]}&keyword=${args[1]}`).then(getres => getres.json()).then(json => {
        if(json.status === "fail"){
            fetch(req.body.response_url, { method: 'POST', body: JSON.stringify({"response_type": "in_channel","text": `Error: ${json.message}`,}), headers: { 'Content-Type': 'application/json' }})
        }   
        if(json.status === "success"){
            fetch(req.body.response_url, { method: 'POST', body: JSON.stringify({"response_type": "in_channel","text": `Success: ${json.message}\nKeyword: ${json.url.keyword}`,}), headers: { 'Content-Type': 'application/json' }})
        } 
    })
});

app.listen(80)

