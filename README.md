# MiddleWare

1. npm init -y
2. npm install express
3. npm install nodemon
4. "dev" : "nodemon index.js" add this to script in Package.json

---

inBuilt Middleware is

- express.json();

but how do we use it in express?

- app.use(express.json());

by this we are able to deal with json, convert the json into valid json

      {
      "name" : "Hussain",
      "email":"aslk@gmail.com",
      "password":"abcdef"
      }

is middleware ki wjah sy we're able to use the values of name,email,password

5. MiddleWare should be defined before the router

```
   app.get("/", (req, res) => {
   console.log(req.body);
   res.send("Hello World");
   });


   // error handler
    app.use((err, req, res, next) => {
      res.status(400).send(err.message)
    })

    //router middleware

    //app will be replaced by route simple as that
      route.use((err, req, res, next) => {
      console.log("inisde router middleware)
    })
```

### Order is Very Important
