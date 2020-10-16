const express = require('express');
// const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();
// app.use(favicon(__dirname + '/build' ));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,'build')));
app.get('/ping',function(req, res){
    return res.send('pingg');
});
app.get('/*',function(req, res){
    res.sendFile(__dirname, 'build', 'index.html')
})
app.listen(port);