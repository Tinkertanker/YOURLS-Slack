# YOURLS-Slack
A YOURLS Slack bot for people who simply despise their browsers.

### Credits:
- Localtunnel(https://www.npmjs.com/package/localtunnel) because Slack's /commands requires a http endpoint.
- Express.js for recieving post requests from slack.
- Node-fetch(https://www.npmjs.com/package/node-fetch) for API calls.
- Crypto & qs(https://www.npmjs.com/package/qs) for slack verification
- This awesome article, https://medium.com/@rajat_sriv/verifying-requests-from-slack-using-node-js-69a8b771b704 from which I copied wholesomely from :)
- Supervisor(https://www.npmjs.com/package/supervisor) in case Localtunnel decides to crash.
- Rest of Tinkertanker.

### License:
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