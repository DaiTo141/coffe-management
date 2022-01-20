<p align="center">
    <span>This is Project app based on framework built on 
        <a href="https://nodejs.org">Node.js</a> 
        with 
        <a href="https://nextjs.org/">Next.js</a>
    </span>
</p>

### 1. Install nodejs 14
```
Node version requirements
Node version ~v14.x
```
### 2. Install package dependencies
- #### In forder server
    - `cd server` and  `npm install`
- #### In forder client
    - `cd client` and  `npm install`
### 3. Provide environment variable for server
- cd server
- At file .env must have 5 variables
    - DB_USER: user to connect mssql  
    - DB_PWD: corresponding password with user
    - DB_NAME: corresponding database 
    - ACCESS_TOKEN_SECRET: secret token for jwt
    - PORT: server will run in port (value should be 3000)
### 4. Run project
- Run server
    - cd server
    - npm run start
- Run client
    - cd client
    - npm run dev
### 5. Check your website at http://localhost:3001

&nbsp;
#### If you have any problems, please contact mail hans@techainer.com
