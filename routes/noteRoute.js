
const express = require('express')
const NoteRouter = express.Router()



const auth = require('./../middlewares/auth')
const { createNote, updateNote, deleteNote, getNote } = require('./../controllers/noteController')
NoteRouter.get("/" ,auth, getNote)

NoteRouter.post("/" ,auth , createNote)
NoteRouter.delete("/:id" , auth , deleteNote)
NoteRouter.put("/:id" , auth , updateNote)
 
module.exports = NoteRouter;


