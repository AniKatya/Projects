const express = require( 'express' )//we need to require every NPM package we want to use
const app = express()//we invoke express and store its value in a variable called app
const request = require('request')

const path = require('path')

const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})

app.use(express.static(path.join(__dirname, 'dist')));//serve our files
app.use(express.static(path.join(__dirname, 'node_modules')))//server node_modules

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

app.get('/teams/:teamName', function (req, res){
    let teamName = req.params.teamName;
    request("http://data.nba.net/10s/prod/v1/2018/players.json", function(err, response, body){//-Server - NBA request
        const getBody = JSON.parse(response.body)
        const objects= getBody.league.standard//NBA - Server Response
        const teamId = teamToIDs[`${teamName}`]
        const resArray = objects.filter(i=>i.teamId===teamId).filter(j=>j.isActive===true)
        const finalArray =[]
        resArray.forEach(i=> finalArray.push
            ({'firstName':i.firstName,
             'lastName':i.lastName,
             'jersey': i.jersey,
             'pos': i.pos}))
        res.send(finalArray)
    })
})