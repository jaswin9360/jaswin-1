import express from 'express'
import { detail, indexdelete, indexget, indexpost, indexput } from '../controllers/jk.controller.js';


const router = express.Router()

router.get("/jk", indexget);

router.get("/jk:id",detail)

router.post("/jk", indexpost);


router.put("/jk:id", indexput);


router.delete("/jk:id", indexdelete);

export default router;