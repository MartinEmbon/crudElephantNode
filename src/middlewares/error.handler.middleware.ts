//dos tipos uno captador de error y otro un captador generico
//interceptadores
import { StatusCodes } from "http-status-codes";
import DatabaseError from "../models/errors/database.error.model";
import { NextFunction, Request, Response } from "express";

function errorHandler(error:any,req:Request,res:Response,next:NextFunction){
    if (error instanceof DatabaseError){
        res.sendStatus(StatusCodes.BAD_REQUEST)  
      } else {          
          res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      }   
}

export default errorHandler
