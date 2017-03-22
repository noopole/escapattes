var express = require( 'express' )
var morgan = require( 'morgan' )

var app = express()

app.use( morgan( 'dev') )
app.use( express.static( 'public') )

app.get( '/', function ( req, res )
{
    res.send( 'Escapattes' )
} )

app.listen( 4000 )

