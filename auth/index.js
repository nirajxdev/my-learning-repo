const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const notes = [];

const users = [{
  "username": "niraj",
  "password": "123456"
}];

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const userExists = users.find(user => user.username === username);
  if (userExists) {
    return res.status(403).json({
      "message": "user with this username already exists"
    })
  }
  users.push({
    username: username,
    password: password
  })
  res.json({
    "message": "you are signed up"
  })

});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const userExists = users.find(user => user.username === username && user.password === password);

  if (!userExists) {
    return res.status(403).json({
      message: "incorrect credentials"
    })
  }

  const token = jwt.sign({
    username: username,
    password: password
  }, "nirajxdev69");

  res.json({
    token: token
  })
})


app.post("/notes", (req, res) => {
  const token = req.headers.token;

  if (!token) {
    res.status(403).send({
      message: "you are not logged in"
    })
  }
  const decoded = jwt.verify(token, "nirajxdev69");
  const username = decoded.username;

  if (!username) {
    res.status(403).json({
      message: "malformed token"
    })
    return;
  }


  const note = req.body.note;
  notes.push(note);

  res.json({
    message: "done"
  })
})


app.get("/notes", (req, res) => {
  const token = req.headers.token;

  if (!token) {
    res.status(403).send({
      message: "you are not logged in"
    })
  }
  const decoded = jwt.verify(token, "nirajxdev69");
  const username = decoded.username;

  if (!username) {
    res.status(403).json({
      message: "malformed token"
    })
    return;
  }

  const userNotes = notes.filter(note => note.username === username);

  res.json({
    notes: userNotes
  })
})




app.get('/', (req, res) => {
  res.send('hellow world')
})


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
})
