require('dotenv').config()
const express = require('express');

const app = express()
const port = 4000
const res_Data = {
  "login": "dhirajaryaa",
  "id": 167156303,
  "node_id": "U_kgDOCfaaTw",
  "avatar_url": "https://avatars.githubusercontent.com/u/167156303?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/dhirajaryaa",
  "html_url": "https://github.com/dhirajaryaa",
  "followers_url": "https://api.github.com/users/dhirajaryaa/followers",
  "following_url": "https://api.github.com/users/dhirajaryaa/following{/other_user}",
  "gists_url": "https://api.github.com/users/dhirajaryaa/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/dhirajaryaa/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/dhirajaryaa/subscriptions",
  "organizations_url": "https://api.github.com/users/dhirajaryaa/orgs",
  "repos_url": "https://api.github.com/users/dhirajaryaa/repos",
  "events_url": "https://api.github.com/users/dhirajaryaa/events{/privacy}",
  "received_events_url": "https://api.github.com/users/dhirajaryaa/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Dhiraj Arya",
  "company": null,
  "blog": "https://dhirajaryaa.vercel.app/",
  "location": "Patna, India",
  "email": null,
  "hireable": null,
  "bio": "Future Full-Stack Dev | 12th \r\n@SMD\r\n College Patna | HTML, CSS, JS, Node.js, React | Let's Connect!",
  "twitter_username": "dhirajaryaa",
  "public_repos": 16,
  "public_gists": 0,
  "followers": 2,
  "following": 3,
  "created_at": "2024-04-16T02:50:59Z",
  "updated_at": "2024-10-16T01:54:25Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
  res.send('Hello twitter!')
})
app.get('/progress',(req,res)=>{
  res.send('<h1> Today I have learn how to create server and deploy online. Thanks to Sir Hitesh Chaudhary for his guidance and support.</h1>')
})
app.get('/login',(req,res)=>{
  res.send('<h1> Please Login on chat aur code. </h1>')
})
app.get('/youtube',(req,res)=>{
  res.send('<h2> This is Youtube path </h2>')
})
app.get('/github',(req,res)=>{
  res.json(res_Data)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
