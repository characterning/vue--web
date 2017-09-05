const express = require('express');
const app = express();
const fs = require('fs-extra');
const path = require('path');
const request=require('request');
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true')
    next();
};
let api="http://www.17getfun.com";
let dataList="";
let dataList2="";
app.use(allowCrossDomain);
const template = `
<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <meta content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="renderer" content="webkit" />
    <meta name="360-fullscreen" content="true" />
    <meta name="x5-fullscreen" content="true" />
    <meta name="full-screen" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="http-equiv=X-UA-COMPATIBLE" content="IE=edge,chrome=1" />
    <link href="http://img.17getfun.com/iconShare/favicon2.ico" rel="icon" type="image/x-icon"/>
    <link rel="apple-touch-icon" href="//static1.mtime.cn/favicon.ico" />
    <title>盖饭娱乐_gif图_gif动图</title>
<link href="client/css/main.css" rel="stylesheet">
</head>
<body>
    <div id="app">
    <!--vue-ssr-outlet-->
    </div>
</body>
</html>
`
const vueServerRenderer = require('vue-server-renderer');
app.all('*', function (req, res, next) {
    if (req.method == "OPTIONS") res.send(200); /*让options请求快速返回*/
    else next();
});
app.use(express.static('./build'))
app.use('/data', (req, res, next) => {
    request(api+"/discovery/discoveryFrontPageing?page=1&pageSize=30", function (error, response, body) {
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body)
            // console.log(body.data)
            dataList=body.data;
            // console.log(dataList)
        }
    })
    res.send({
        "code": 1,
        dataList,  
        "msg": "",
        "showMsg": ""
    })
})
app.use("/data1",(req,res,next)=>{
    request(api+'api/channel/allChannels',function(error,response,body){
     if(!error&&response.statusCode==200){
        body=JSON.parse(body)
        dataList2=body.data
     }
    })
    res.send({
        dataList2
    })
})
app.get('/', function (req, resp) {
    const filePath = path.join(__dirname, './build/vue-ssr-bundle.json')
    const code = fs.readJsonSync(filePath);
    const bundleRenderer = vueServerRenderer.createBundleRenderer(code, {
        template: template
    });
    bundleRenderer.renderToString((err, html) => {
        if (err) {
            console.log(err.message);
            console.log(err.stack);
        }
        // console.log(html);
        resp.send(html)
    });
})
app.listen(5000, () => {
    console.log('Listen 5000')
})