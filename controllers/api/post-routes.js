//imports the express library, all three models, and the connection logic
const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const sequelize = require("../../config/connection");
const withAuth = require("../../utils/auth");

//GET route for all posts
router.get("/", (req, res) => {
  console.log("======================");
  Post.findAll({
    attributes: [
      "id",
      "title",
      "genre",
      "ingredients",
      "difficulty",
      "requirements",
      "user_id",
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "body", "user_id", "post_id"],
        include: {
          model: User,
          attributes: ["id", "username", "first_name", "last_name", "email"],
        },
      },
      {
        model: User,
        attributes: ["id", "username", "first_name", "last_name", "email"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//GET route for post by id
router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "title",
      "genre",
      "ingredients",
      "difficulty",
      "requirements",
      "user_id",
    ],
    include: [
      {
        model: User,
        attributes: ["id", "username", "first_name", "last_name", "email"],
      },
      {
        model: Comment,
        include: {
          model: User,
          attributes: ["id", "username", "first_name", "last_name", "email"],
        },
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id!" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//POST route for creating a new post
router.post("/", withAuth, (req, res) => {
  Post.create({
    title: req.body.title,
    genre: req.body.genre,
    ingredients: req.body.ingredients,
    difficulty: req.body.difficulty,
    requirements: req.body.requirements,
    user_id: req.session.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//PUT route to update a post by id
router.put("/:id", withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title,
      genre: req.body.genre,
      ingredients: req.body.ingredients,
      requirements: req.body.requirements,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id!" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//DELETE route to remove a post from the database
router.delete("/:id", withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id!" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
