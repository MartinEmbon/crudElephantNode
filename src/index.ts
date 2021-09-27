//npm install -g typescript
//tsc --init
//npm install --save-dev typescript
//npm install --save-dev @types/node para ter autocomplete
//tsc
//npm run build e depois node ./dist/index.js
//npm install --save-dev ts-node-dev para automatizar

import express,{Request,Response,NextFunction} from "express"
import statusRoute from "./routes/status.route"
import usersRoute from "./routes/users.routes"
import errorHandler from "./middlewares/error.handler.middleware"

//configurando usar json
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//configurando rotas
app.use(usersRoute)
app.use(statusRoute)

//configuracion handle de error
app.use(errorHandler)

//Inicializacion de servidor
app.listen(3000,()=>{
    console.log("Aplicacao rodando na porta 3000!")
})