import express from "express";
import { v4 as uuidv4 } from 'uuid';



const router = express.Router();

let users = []

// All routes in here are starting with /users
// GET
router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

// POST
router.post("/", (req, res) => {
  const user = req.body; //getting user data

  // const userId = uuidv4();
  // const userWithId = { ...user, id: uuid() }

  users.push({ ...user, id: uuidv4() }); //pushing it to database

  res.send(`user with name ${user.firstName} added to the database!..`);
});

// GET
router.get('/:id', (req, res) => {

  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id)
  res.send(foundUser)

})

// DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id != id);
  res.send(`user with the id ${id} deleted from database`)
})

// PATCH
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id)

  if (firstName) user.firstName = firstName;

  if (lastName) user.lastName = lastName;

  if (age) user.age = age;

  res.send(`user with the id ${id} has been updated`)


})

export default router;
