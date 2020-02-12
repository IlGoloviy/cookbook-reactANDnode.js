const express =  require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.99.100:32768/cooking', {useUnifiedTopology: true, useNewUrlParser: true});

const Recipe = require('./models/recipe');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/recipes', async (req, res) => {
  const recipes = await Recipe.find();
  
  res.send(recipes);
});

app.get('/recipe/:id', async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  
  res.send(recipe);
});

app.post('/recipe', async (req, res) => {
  const recipe = new Recipe(req.body);
  const savedRecipe = await recipe.save();

  res.send(savedRecipe);
});

app.post('/edit', async (req, res) => {
  await Recipe.updateOne({_id: req.body.id}, {
    name: req.body.name, 
    ingredient: req.body.ingredient,
    cook: req.body.cook,
    date: req.body.date
  });
  await Recipe.updateOne({_id: req.body.id}, {$push: {
    version: req.body.version
  }});
  
  const recipes = await Recipe.find();
  res.send(recipes);
});

// app.post('/delete', async (req, res) => {
//   await Recipe.deleteOne({_id: req.body.id});

//   res.redirect('/tasks');
// });

app.listen(8080, () => {
  console.log('Server has been started!');
}); 