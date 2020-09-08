# graphql-noteapp

http://noteaddapp.surge.sh/

https://noteaddapp.herokuapp.com/graphql

**QUERY**

`
query {
  reflects {
    text
  }
}
`

**ADD TEXT**

`mutation {addText (data: { text: "deploy" }) {text}}`

----------------------

cd server

npm install

npm run start:dev

** NEW TERMINAL **

cd client

npm install

npm start

