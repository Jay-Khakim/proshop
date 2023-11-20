import { isValidObjectId } from "mongoose";

function checkObjectId(res, req, next){
    if(!isValidObjectId(req.params.id)){
        res.status(404);
        throw new Error(`Invalid ObjectId of: ${req.params.id}`)
    }
    next()
}

export default checkObjectId;