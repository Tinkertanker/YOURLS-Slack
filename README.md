# YOURLS-Slack
A YOURLS Slack bot for people who simply despise their browsers. Simple script

## How to install:
<details><summary>Show</summary>
<p>
Documentation is WIP

#### Step 1: Clone the repo & install dependencies using npm install
![alt Clone and Instal dependencies](https://raw.githubusercontent.com/Tinkertanker/YOURLS-Slack/master/docs/images/1.1.png)


#### Step 2: Create a slack application
![alt Create by signing in and going to https://api.slack.com/apps](https://raw.githubusercontent.com/Tinkertanker/YOURLS-Slack/master/docs/images/1.2.png)


#### Step 3: Create commands
![alt Create /shorten](https://raw.githubusercontent.com/Tinkertanker/YOURLS-Slack/master/docs/images/1.3.png)
![alt Create /unshorten](https://raw.githubusercontent.com/Tinkertanker/YOURLS-Slack/master/docs/images/1.4.png)


#### Step 4: Fill in the exampleconfig.json file, rename it to config.json and run node index

</p>
</details>

## Credits:
### Node.js
- Localtunnel(https://www.npmjs.com/package/localtunnel) because Slack's /commands requires a http endpoint.
- Express.js for recieving post requests from slack.
- Node-fetch(https://www.npmjs.com/package/node-fetch) for API calls.
- Crypto & qs(https://www.npmjs.com/package/qs) for slack verification
- This awesome article, https://medium.com/@rajat_sriv/verifying-requests-from-slack-using-node-js-69a8b771b704 from which I copied wholesomely from :)
- Supervisor(https://www.npmjs.com/package/supervisor) in case Localtunnel decides to crash.
### Yourls
 - YOURLS Plugin: API Action - Delete (https://github.com/claytondaley/yourls-api-delete)

All at Tinkertanker.

## License:
```
MIT License

Copyright (c) 2018 Tinkertanker

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
<div style="text-align:center;">
## Made by:
<img src="https://raw.githubusercontent.com/Tinkertanker/YOURLS-Slack/master/docs/images/tticon.png" alt="Tinkertanker" width="50%" height="50%">
</div>