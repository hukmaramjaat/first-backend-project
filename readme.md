What is Backend ?
Backend developer wo banda hai ho ki server and db program karta hai.

Why backend?
to make websites more usable and purposefult for the audience, to make websites dynamic.


Why not frontend alone?
with frontend websites are static and they are of not much use.

what do we need?
nodejs, mongodb, mongoosejs, expressjs......


what should we make to hit big companies?
.?

CONTENT :->
- node js install.✅
-import and export.✅
-run the code.✅
-- node js core usage & understanding - http.
-npm usage.
-express.
-express generator.
--mongodb.
--intermediate mongodb.
-- api development.
-- authentication and authorization.
-- error handling.
- middleware.
-- session and cookies.
-- deployment.
-- testing.
-- realtime stuff.


node vs express -> node is the main thing express ke code se hum server ka code likh pate and server kaisa reac karega wo bhi express ke help se likhte hai (node allow you to make a server)



what is express js -> package, routing


why express js -> http is difficult to use, express makes this easier


routing -> routes banaane ke process ko hum kahte hai routing.
/profile
/home
/contact


middleware -> ek aisa function hota hai ho har route se pahle chalte hai, iska matlab saare routes mein koi bhi chale usse pahle middleware chalte hai and usmein likha code phale excute hota hai


request and response, next -> req mein saara data hota hai aane waale user ke request ki taraf ka, jaise ki uski location, device info and other things,  res mein controls hote hai jinke basis pe hum server se response bhej paate hai, next is just a push so that our request moves to next thing which should be executed



route parameters -> to make any route dyamic you can use : at the place where you want to make it dynamic, and to access there value use req.params

/author/books/issued/harsh
/author/books/issued/harshita
/author/books/issued/:username

template engines => ye aapke style of markup se convert kr ke html deta hai (pug, handlebars, ejs, jad). ek markup style jo ki baad mein convert ho jayegi html me

we are use ejs because ejs look like html.



ejs -> ejs setup karne ke liye
1) ejs install
npm i ejs

2) configure ejs

app.set("view engine", "ejs");

3) ek views folder bano

4) usmein ejs files banao

5) send ki jagah render  karo => render karte waqt make sure app view folder ke andar waali hi koi file kaa naam likhein, aur render function mein .ejs nhi likhe

static files => images, stylesheets, frontend js setup karna
static files setup karne ke liye:

1) create a folder called public
2) create three folders inside it, images, stylesheets, javascripts
3) configure the express static in index.js file
4) understand the path

http methods - get post


error handling

--------------------------------------------------------------------

The EndGame(part-1) ->
express generator
mongodb
    dbs, models, schema, collections, documents

session and cookies
understanding sessions
    creating sessions, using sessions accross routes and destroying

understanding cookies
    creating cookies, using cookies accross routes and destroying cookies


sessions-
express-session
create
req.session.koibhinaam = koibhivaluse;

read
req.session.koibhinaam

delete
req.session.destory


cookie setup
res.cookie("name", value)

cookie reading->
req.cookies.name

cookie delete
res.clearcookie("name")
---------------------------------------------------------------------
express Genetator =>
ham logo ko kaafi saara kaam karna padta hai express setup krne mein iska matlab har baar jab hum naya project banaayege to har baar fir se utna hi kaam krna padega, matlab ki poora code likho and sab kuchh setup karo, is time ko bacha sakte ho with help of express generator, use express generator and it will make the folder structure for you and it will also write the basic code for the project.

express generator ek folder bana ke deta hai, jiska matlab aapko khudse folder nahi banana hai, to express generator saare files ko is folder mein daal ke dega

steps to use express generator
sabse pahle jeevan mein ek baar laptop par install karo globally
npm i express-generator -g
to create new app anywhere:
open cmd move to desktop
create new app:
express appname --view=ejs

now use two conmmands
cd appname npm i 
npm i
open it on vs code


changes in express generator =>
app.get -> router.get
npx nodemon filename -> npx nodemon



---------------------------------------------------------------------
Mongo db ->
install mongodb
install mongoosejs
require and setup connection
make schema
create model and export

models(code) => collection(db)

ek app ka poora data => db
ek app mein variety of data hota hai par poora data hota app ka hi hai, par us data ka sub category kehlaata hai collection
collection matlab ki bola users ka data, ek user pe baat kre to hua document


=====================================================================
The EndGame(part-2) ->
intermediate mongodb
    How can I perform a case-insensitive search in Mongoose?
    How do I find documents where an array field contains all of a set of values?
    How can I search for documents with a specific date range in Mongoose?
    How can I filter documents based on the existence of a field in Mongoose?
    How can I filter documents based on a specific field's length in Mongoose

socket .io -real time stuff
api development
authentication and authorization
deployment

[[INTEREVIEW QUESTION RELATED TO BACKEND (FOR NODE.JS CANDIDATIES)]]