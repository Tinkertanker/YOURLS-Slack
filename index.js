const fetch = require('node-fetch');
var localtunnel = require('localtunnel');
var express = require('express');
var app = express()
var bodyParser = require('body-parser')
var crypto = require('crypto')
var qs = require('qs')
const config = require("./config.json")
const slackSigningSecret = config.signingsecret
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
    //verify
    let slackSignature = req.headers['x-slack-signature'];
    let requestBody = qs.stringify(req.body,{ format:'RFC1738' });
    let timestamp = req.headers['x-slack-request-timestamp'];
    let sigBasestring = 'v0:' + timestamp + ':' + requestBody;
    let mySignature = 'v0='+crypto.createHmac('sha256', slackSigningSecret).update(sigBasestring, 'utf8').digest('hex');
    if(slackSignature != mySignature){
        console.log("Faked signature!!!!")
        return;
    }
    //

    let args = req.body.text.split(" ")
    res.setHeader('Content-Type', 'application/json');
    if(!args[0] ||!args[1]){
        res.send(JSON.stringify({"response_type": "in_channel","text": "Missing Arguments"}));
        return;
    }
    res.send(JSON.stringify({"response_type": "in_channel","text": "Verified. Attemping to shorten! :link:"}));
    fetch(`${config.yourl}/yourls-api.php?signature=${encodeURI(config.signature)}&action=shorturl&format=json&url=${encodeURI(args[0])}&keyword='${encodeURI(args[1].toLowerCase())}'`).then(getres => getres.json()).then(json => {
        if(json.status === "fail"){
            fetch(req.body.response_url, { method: 'POST', body: JSON.stringify({"response_type": "in_channel","text": `Error: ${json.message}`,}), headers: { 'Content-Type': 'application/json' }})
        }   
        if(json.status === "success"){
            fetch(req.body.response_url, { method: 'POST', body: JSON.stringify({"response_type": "in_channel","text": `Success: ${json.message}\nShortcut: ${json.shorturl}`,}), headers: { 'Content-Type': 'application/json' }})
        } 
    })
});

app.post('/unshorten', function(req, res){
    //verify
    let slackSignature = req.headers['x-slack-signature'];
    let requestBody = qs.stringify(req.body,{ format:'RFC1738' });
    let timestamp = req.headers['x-slack-request-timestamp'];
    let sigBasestring = 'v0:' + timestamp + ':' + requestBody;
    let mySignature = 'v0='+crypto.createHmac('sha256', slackSigningSecret).update(sigBasestring, 'utf8').digest('hex');
    if(slackSignature != mySignature){
        console.log("Faked signature!!!!")
        return;
    }
    //
    
    let args = req.body.text.split(" ")
    res.setHeader('Content-Type', 'application/json');
    if(!args[0]){
        res.send(JSON.stringify({"response_type": "in_channel","text": "Missing Arguments"}));
        return;
    }
    res.send(JSON.stringify({"response_type": "in_channel","text": "Verified. Attemping to unshorten! :boom:"}));
    fetch(`${config.yourl}/yourls-api.php?signature=${encodeURI(config.signature)}&action=delete&shorturl='${encodeURI(args[0].toLowerCase())}'&format=json`).then(getres => getres.json()).then(json => {
        if(json.statusCode != 200){
            fetch(req.body.response_url, { method: 'POST', body: JSON.stringify({"response_type": "in_channel","text": `${json.message.charAt(0).toUpperCase() + json.message.slice(1)}`,}), headers: { 'Content-Type': 'application/json' }})
        }   
        if(json.statusCode === 200){
            fetch(req.body.response_url, { method: 'POST', body: JSON.stringify({"response_type": "in_channel","text": `${json.message.charAt(0).toUpperCase() + json.message.slice(1)}`,}), headers: { 'Content-Type': 'application/json' }})
        } 
    })
});
app.listen(80)

