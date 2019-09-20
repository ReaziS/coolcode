const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const objectID  = require('mongodb').ObjectID;
app.use(bodyParser.json());
const jwt = require('jsonwebtoken');
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
var db;
const port = 3000;/*
app.post('/request', (req, res) => {
  var request = {
    employeeName: req.body.employeeName,
    clientName: req.body.clientName,
    email: req.body.email,
    comment: req.body.comment
  };
  console.log(request);
  db.collection('requests').insertOne((request), (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(null);
  });
});
app.get('/request', (req, res) => {
  db.collection('requests').find().toArray((err, docs) =>{
    if(err) {
      console.log(err);
      return res.sendStatus(500);
    }
    docs.map(item => {
      item.id = item._id;
      return item;
    });
    res.send(docs);
  })
});
app.delete('/request/:id' , (req, res) =>{
  db.collection('requests').deleteOne(
    {_id: objectID(req.params.id)},
    (err, result) => { 
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.send(JSON.stringify('true'));

    });

});
app.post('/login', (req, res) => {
db.collection('accounts').findOne({login: req.body.login}, (err, result) => {
  if (!result) {
    console.log('1');
    res.status(401).send('User not found');
  } else {
    if (result.password !== req.body.password) {
      res.status(401).send('Wrong password');
    } else {
      console.log('correct password');
      const payload = {
        subject: result._id,
      };
      const token = jwt.sign(payload, 'loginKey');
      res.status(200).send({token});
    }
  }
})

});
app.get('/admin/:token', (req, res) => {
  const token = req.params.token;
  const payload = jwt.verify(token, 'loginKey');
  const _id = payload.subject;
  db.collection('accounts').findOne({
    _id: new objectID(_id)
  }, (err, result) => {
    if (result.role === 'admin') {
      console.log('its admin');
      res.send({yourRole:'admin'});
    }
    else {
      res.sendStatus(401);
    }
  });
});*/
let url =  'mongodb+srv://reazis:kostia@druzja-6w5ea.mongodb.net/test?retryWrites=true';
mongoClient.connect(url,{ useNewUrlParser: true }, function(err, database) {
  if (err) {
    return console.log(err)
  }
  db = database.db('kukolds');

  app.listen(port, function () {
    console.log('API app start' + port)
  })
});

app.get('/kukolds', (req, res) => {
  db.collection('kukolds').find().toArray((err, docs) =>{
    if(err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  })
});
app.get('/squads', (req, res) => {
  db.collection('squads').find().toArray((err, docs) =>{
    if(err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  })
});

app.get('/squad/:id', (req, res) =>{  
  console.log(req.params.id);
  db.collection('squads').findOne({_id: objectID(req.params.id)}, (err, doc) =>{
    if (err) {
      console.log(err);
      return sendStatus(500);
    }
    res.send(doc)
  })
});

app.post('/squad', (req, res) => {
  console.log(req.body);
  db.collection('squads').insertOne((req.body), (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    console.log(result);
    res.send('200');
  });
});
app.put('/squad/:id' , (req, res) =>{
  db.collection('squads').updateOne(
    {_id: objectID(req.params.id)},
    { $set: { list: req.body
    }}, (err, result) => { 
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.send(req.body);
    });
});
/*
app.delete('/bikes/:id' , (req, res) =>{
  console.log(req.params.id);
  db.collection('bikes').deleteOne(
    {_id: new objectID(req.params.id)},
    (err, result) => { 
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
    });
  res.send('200');

});
app.get('/ingredients', (req, res) => {
  db.collection('ingredients').find().toArray((err, docs) =>{
    if(err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  })
});

app.post('/userOrder', (req, res) => {
  let arrayOfItems = req.body;
  /*arrayOfItems.forEach(element => {
    delete element._id;
  });*/
