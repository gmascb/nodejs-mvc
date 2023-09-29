const { parse } = require("path");

const requestHandler = (req, res) => {

  const httpMethod = req.method;
  const url = req.url;
  const requestBody = []
  let responseBody = ""

  if (httpMethod === 'POST'){

    if (url === '/create-user'){

      req.on('data', (chunk) => {
        console.log(chunk);
        requestBody.push(chunk)
      });

      req.on('end', () => {
        const parsedBody = Buffer.concat(requestBody).toString();

        console.log("New User:", parsedBody.split('=')[1]);
      })

      res.statusCode = 302;
      res.setHeader('Location', '/');
    }
  }
  else{

    if (httpMethod === 'GET'){

      if(url === '/'){
        responseBody = `
        <html>
        <head><title>First NodeJs</title></head>
        <body>
        <h1>Hello World!</h1>

        <form action="/create-user" method="POST">
          <input type="text" name="user_name">
          <button type="submit">Create User</button>
        </form>

        <br><br>
        <a href="http://localhost:3000/users">Users</a>


        </body>
        </html>
      `
      }

      if (url === '/users'){
        responseBody = `
        <html>
        <head><title>First NodeJs</title></head>
        <body>
        <h1>Users</h1>

        <ul><li> User 1 </li></ul>
        <ul><li> User 2 </li></ul>
        <ul><li> User 3 </li></ul>

        </body>
        </html>
      `
      }
    }
  }

  res.write(responseBody.toString());
  return res.end();
}


// module.exports = {
  // requestHandler: requestHandler,
  // serverStarted: "Server Started"
// }


// module.exports.requestHandler = requestHandler;
exports.requestHandler = requestHandler;
exports.serverStarted = "Server Started";
// module.exports = requestHandler;