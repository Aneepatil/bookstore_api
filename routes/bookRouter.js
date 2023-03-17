const router = require("express").Router();
const BookModel = require("../models/bookModel");

// GET METHOD FOR DISPLAYING ALL BOOKS IN DATABASE

router.get("/getbook", async (req, res) => {
  try {
    const books = await BookModel.find();

    res.status(200).json({ books });
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET METHOD FOR DISPLAYING SINGLE BOOKS IN DATABASE

router.get("/getbook/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const books = await BookModel.findById(id);

    res.status(200).json({ books });
  } catch (error) {
    res.status(500).json(error);
  }
});

// POST METHOD FOR ADDING A NEW BOOK TO DATABASE

router.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const createBook = new BookModel(data);
    const createdBook = await createBook.save();

    res.status(200).json(createdBook);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE METHOD FOR UPDATING THE BOOK

router.put("/updatebook/:id", async (req, res) => {
  const id = req.params.id;
  const { bookName, description, auther, image, price } = req.body;
  try {
    const updateBook = await BookModel.findByIdAndUpdate(id, {
      bookName,
      description,
      auther,
      image,
      price,
    });
    const updatedBook = await updateBook.save();
    res.status(200).json("The Book has been updated....");
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE METHOD FOR DELETING THE BOOK FROM DATABASE

router.delete("/deletebook/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedBook = await BookModel.findByIdAndDelete(id);
    res.status(201).json(deletedBook);
    console.log("The Book Has Been Deleted ......")
} catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
});

module.exports = router;
