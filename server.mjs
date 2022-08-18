//CREATE API FOR ADD DELETE POST

import express from 'express'
import cors from 'cors'
const app = express()
app.use(express.json());
app.use(cors())

const port = process.env.PORT || 3000;
// let port = null;
// if (process.env.PORT) {
//   port=process.env.PORT
// } else {
//   port = 3000
// }

let users = [];

//generate random number from 1 to 100000000000
function randomNumber() {
  return Math.floor(Math.random() * 100000000000);
}

app.post('/user', (req, res) => {       //// ADD SINGLE USER

  console.log(req.body);

  let newUser = {
    id: randomNumber(),
    "fullname": req.body.fullname,
    "userName": req.body.userName,
    "password": req.body.password
  }

  users.push(newUser);

  res.send('user is created!');

})

app.post('/users', (req, res) => {
  res.send('API not Created')
})

app.get('/user/:userId', (req, res) => {          //// GET Single User
  let userId = req.params.userId;               //params is used for get userId

  let isFound = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == userId) {
      res.send(users[i]);
      isFound = true;
      break;
    }
  }

  if (!isFound) {
    res.send("user not found");
  } else {
    res.send('Here is your user: User1!')
  }
})


app.get('/users', (req, res) => {          //// GET all User
  res.send(users);
  // res.send('Here is your user: User1!')
})

app.put('/user/:userId', (req, res) => {          //// Put Single DATA 
  let userId = req.params.userId;               //params is used for get userId
  let userIndex = -1;

  isFound = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == userId) {
      userIndex = i;
      break;
    }
  }

  if (userIndex === -1) {
    res.send("user not found");
  } else {
    if (req.body.fullname) { users[userIndex].fullname = req.body.fullname };
    if (req.body.userName) { users[userIndex].userName = req.body.userName };
    if (req.body.password) { users[userIndex].password = req.body.password };

    req.send(users[userIndex]);
    res.send('user modified')
  }

})

app.put('/users', (req, res) => {
  res.send('API not created')  
})

app.delete('/user/:UserId', (req, res) => {          //// DELETE SINGLE DATA 
  let userId = req.params.UserId;               //params is used for get userId
  let userIndex = -1;

  isFound = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == userId) {
      userIndex = i;
      break;
    }
  }

  if (userIndex === -1) {
    res.send("user not found");
  } else {
    users.splice(userIndex, 1);
    res.send('User is Deleted!')
  }

})

app.delete('/users', (req, res) => {
  users = [];

  res.send('User1 is Deleted!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})