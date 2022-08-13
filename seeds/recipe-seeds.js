const { Recipe } = require('../models');

const recipedata = [
  {
    title: 'Creamy White Chili',
    description: 'A family chili recipe that I learned from my grandfather.',
    category: 'lunch',
    ingredients:
      '1 pound boneless skinless chicken breasts, cut into 1/2-inch cubes^&* 1 medium chopped onion^&* 1-1/2 teaspoons garlic powder^&* 1 tablesoon canola oil^&* 2 cans (15 ounces each) great northern beans, rinsed and drained^&* 1 can (14-1/2 ounces each chopped green chiles^&* 1 teaspoon salt^&* 1 teaspoon ground cumin^&* 1 teaspoon dried oregano^&* 1/2 teaspoon pepper^&* 1/4 teaspoon cayenne pepper^&* 1 cup sour cream^&* 1/2 cup heavy whipping cream^&* optional: Torilla chps, shredded cheddar cheese^&* sliced seeded jalapeno pepper',
    difficulty: 'easy',
    time: '10 minutes,40 minutes',
    directions:
      'In a large saucepan, saute the chicken, onion and garlic powder in oil until chicken is no longer pink.^&* Add the beans, broth, chiles and seasonings. ^&* Bring to a boil. Reduce heat; simmer, uncovered, for 30 minutes.^&* Remove from the heat; stir in sour cream and heavy cream. If desired, top with tortilla chips, cheese and jalapenos.',
    user_id: 10,
  },
  {
    title: 'Best Ever Banana Bread',
    description: 'Best banana bread ever!',
    category: 'breakfast',
    ingredients:
      '1-3/4 cups all-purpose flour^&* 1-1/2 cups sugar^&* 1 teaspoon baking soda^&* 1/2 teaspoon salt^&* 2 large eggs, room temperature^&* 2 medium ripe bananas^&* mashed (1 cup)^&* 1/2 cup canola oil^&* 1/4 cup plus 1 tablespoon buttermilk^&* 1 teaspoon vanilla extract^&* 1 cup chopped walnuts',
    difficulty: 'medium',
    time: '15 minutes,1 hour',
    directions:
      'Preheat oven to 350°.^&* In a large bowl, stir together flour, sugar, baking soda and salt. In another bowl, combine the eggs, bananas, oil, buttermilk and vanilla; add to flour mixture, stirring just until combined. Fold in nuts. ^&*Pour into a greased or parchment-lined 9x5-in. loaf pan. If desired, sprinkle with additional walnuts. Bake until a toothpick comes out clean, 1-1/4 to 1-1/2 hours. ^&*Cool in pan for 15 minutes before removing to a wire rack.',
    user_id: 8,
  },
  {
    title: 'Amish Breakfast Casserole',
    description: 'An Amish dish common to the midwest.',
    category: 'dinner',
    ingredients:
      '1 pound sliced bacon, diced^&* 1 medium sweet onion, chopped^&*6 large eggs, lightly beaten^&* 4 cups frozen shredded hash brown potatoes thawed^&* 2 cups shredded cheddar cheese^&* 1-1/2 cups 4% cottage cheese^&* 1-1/4 shredded Swiss cheese',
    difficulty: 'medium',
    time: '15 minutes,35 minutes',
    directions:
      'Preheat oven to 350°.^&*In a large skillet, cook bacon and onion over medium heat until bacon is crisp; drain.^&*In a large bowl, combine remaining ingredients; stir in bacon mixture. Transfer to a greased 13x9-in. baking dish.^&*Bake, uncovered, until a knife inserted in the center comes out clean, 35-40 minutes. Let stand 10 minutes before cutting.',
    user_id: 1,
  },
  {
    title: 'Pumpkin Spice Cupcakes with Cream Cheese Frosting',
    description: 'These cupcakes will set the tone for any gathering.',
    category: 'dessert',
    ingredients:
      "3/4 cup butter softened^&*2-1/2 cups sugar^&* 3 large eggs^&*1 can(15 ounces) solid-pack pumpkin^&* 2-1/3 cups all-purpose flour^&* 1 tablespoon pumpkin pie spice^&* 1 teaspoon baking powder^&* 1 teaspoon ground cinnamon^&* 3/4 teaspoon salt^&* 1/2 teaspoon baking soda^&* /2 teaspoon ground ginger^&* 1 cup buttermilk^&* Frosting:^&* 1 package (8 ounces) cream cheese, softened^&* 4 cups confectioners' sugar^&* 1 teaspoon vanilla extract^&* 2 teaspoons ground cinnamon",
    difficulty: 'hard',
    time: '25 minutes,20 minutes',
    directions:
      'Preheat oven to 375°.^&*In a large bowl, cream butter and sugar until light and fluffy. Add eggs, one at a time, beating well after each addition. Add pumpkin. Combine flour, pie spice, baking powder, cinnamon, salt, baking soda and ginger; add to creamed mixture alternately with buttermilk, beating well after each addition.^&*Fill 24 paper-lined muffin cups three-fourths full. Bake 20-25 minutes or until a toothpick inserted in the center comes out clean. Cool 10 minutes before removing from pans to wire racks to cool completely.^&*For frosting, in a large bowl, beat cream cheese and butter until fluffy. Add confectioners sugar, vanilla and cinnamon; beat until smooth. Frost cupcakes. Refrigerate leftovers. ',
    user_id: 4,
  },
  {
    title: 'Flavorful Chicken Fajitas',
    description: 'These fajitas will make the perfect snack on a summer day.',
    category: 'snack',
    ingredients:
      '4 tablespoons canola oil divided^&* 2 tablespoons lemon juice^&*1-1/2 teaspoons seasoned salt^&* 1-1/2 dried oregano^&* 1-1/2 teaspoons ground cumin^&* 1 teaspoon garlic powder^&* 1/2 teaspoon chili powder^&* 1/2 teaspoon paprika^&* 1/2 teaspoon crushed red pepper flakes^&* 1-1/2 pounds boneless skinless chicken breasts cut into thin stips^&* 1/2 medium sweet red pepper julienned^&* 1/2 medium green pepper julienned^&* 4 green onions, thinly sliced^&* 1/2 cup chopped onion^&* 6 flour tortillas(8 inches) warmed^&* Optional: shredded cheddar cheese taco sauce salsa guacamole sliced red onions and sour cream',
    difficulty: 'medium',
    time: '20 minutes,10 minutes',
    directions:
      'In a large bowl, combine 2 tablespoons oil, lemon juice and seasonings; add the chicken. Turn to coat; cover. Refrigerate for 1-4 hours.^&*In a large cast-iron or other heavy skillet, saute peppers and onions in remaining oil until crisp-tender. Remove and keep warm.^&*Drain chicken, discarding marinade. In the same skillet, cook chicken over medium-high heat until no longer pink, 5-6 minutes. Return pepper mixture to pan; heat through.^&*Spoon filling down the center of tortillas; fold in half. Add toppings as desired, fold in half.',
    user_id: 7,
  },
  {
    title: 'Apple Pie',
    description: 'As American as you can get.',
    category: 'dessert',
    ingredients:
      'Dough for double-crust pie^&* 1/3 cup sugar^&* 1/3 cup packed brown sugar^&* 1/4 cup all-purpose flour^&* 1 teaspoon ground cinnamon^&* 1/4 teaspoon ground nutmeg^&* 6 to 7 cups thinly sliced peeled tart apples^&* 1 tablespoon lemon juice^&* 1 tablespoon butter^&* 1 large egg white^&* Optional: Turbinado or coarse sugar, ground cinnamon, vanilla bean ice cream, and caramel sauce',
    difficulty: 'hard',
    time: '20 minutes,45 minutes',
    directions:
      'Preheat oven to 375°^&*On a lightly floured surface, roll half of the dough to a 1/8-in.-thick circle; transfer to a 9-in. pie plate. Chill while preparing filling.^&*In a small bowl, combine sugars, flour and spices. In a large bowl, toss apples with lemon juice. Add sugar mixture; toss to coat. Add filling; dot with butter.^&*Roll remaining dough to a 1/8-in.-thick circle. Place over filling. Trim, seal and flute edge. Cut slits in top. Beat egg white until foamy; brush over crust. If desired, sprinkle with turbinado sugar and ground cinnamon.^&*Bake on the lowest rack 60-70 minutes, until crust is golden brown and filling is bubbly, covering with foil halfway if crust begins to get too dark. Cool on a wire rack. If desired, serve with ice cream and caramel sauce.^&*',
    user_id: 4,
  },
  {
    title: 'Traditional Lasagna',
    description: 'This recipe will make great leftovers for days.',
    category: 'dinner',
    ingredients:
      '1 pound ground beef^&* 3/4 pound bulk pork sausage^&* 3 cans(8 ounces each) tomato sauce^&* 2 cans (6 ounces each) tomato paste^&* 2 garlic cloves minced^&* 2 teaspons sugar^&* 1 teaspoon Italian seasoning^&* 1/2 to 1 teaspoon salt^&* 1/4 to 1/2 teaspoon pepper^&* 3 large eggs^&* 3 tablespoons minced fresh parsely^&* 3 cups 4% small-curd cottage cheese^&* 1 cup ricotta cheese^&* 1/2 cup grated Parmesean cheese^&* 9 lasagna noodles cooked and drained^&* 6 slices Beliogioso Provolone Cheese (about 6 ounces),^&* 3 cups shredded part-skim mozzarella cheese divided',
    difficulty: 'hard',
    time: '30 minutes,1 hour',
    directions:
      'Preheat oven to 375°^&*In a large skillet over medium heat, cook and crumble beef and sausage until no longer pink; drain.^&*Add next 7 ingredients. Bring to a boil. Reduce heat; simmer, uncovered, 1 hour, stirring occasionally. Adjust seasoning with additional salt and pepper, if desired.^&*Meanwhile, in a large bowl, lightly beat eggs. Add parsley; stir in cottage cheese, ricotta and Parmesan cheese.^&*Spread 1 cup meat sauce in an ungreased 13x9-in. baking dish. Layer with 3 noodles, provolone cheese, 2 cups cottage cheese mixture, 1 cup mozzarella, 3 noodles, 2 cups meat sauce, remaining cottage cheese mixture and 1 cup mozzarella. Top with remaining noodles, meat sauce and mozzarella (dish will be full).^&*Cover; bake 50 minutes. Uncover; bake until heated through, about 20 minutes.^&*Let stand 15 minutes before cutting.',
    user_id: 1,
  },
  {
    title: "Li'l Cheddar Meat Loaves",
    description: 'If you do not like meatloaf this will change your mind!',
    category: 'dinner',
    ingredients:
      '1 large egg^&* 3/4 cup whole milk^&* 1 cup shredded cheddar cheese^&* 1/2 quick-cooking oats^&* 1/2 cup quick-cooking oats^&* 1/2 cup chopped onion^&* 1/2 teaspoon salt^&* 1 pound ground beef^&* 2/3 cup ketchup^&* 1/2 cup packed brown sugar^&* 1-1/2 teaspoons prepared mustard',
    difficulty: 'medium',
    time: '15 minutes,25 minutes',
    directions:
      'Preheat oven to 350°F.^&*In a large bowl, whisk egg and milk. Stir in the cheese, oats, onion and salt. Crumble beef over mixture and mix well.^&*Shape into 8 loaves; place in a greased 13x9-in. baking dish. In a small bowl, combine the ketchup, brown sugar and mustard; spoon over loaves.^&*Bake uncovered for 25-30 minutes or until no pink remains and a thermometer reads 160°',
    user_id: 9,
  },
  {
    title: 'Rustic Italian Tortellini Soup',
    description: 'Great soup for a fall day.',
    category: 'dinner',
    ingredients:
      '3/4 pound Italian turkey sausage links, casings removed^&* 1 medium onion, chopped^&* 6 garlic cloves, minced^&* 2 cans (14-1/2 ounces each) reduced-sodium chicken broth^&* 1-3/4 cups water^&* 1 can (14-1/2 ounces) diced tomatoes, undrained^&* 1 package (9 ounces) refrigerated cheese tortellini^&* 1 package (6 ounces) fresh baby spinach, coasrsely chopped^&* 2-1/4 teaspoons minced fresh basil or 3/4 teaspoon dried basil^&* 1/4 teaspoon pepper^&* dash crushed red pepper flakes^&* shredded parmesean cheese, optional',
    difficulty: 'easy',
    time: '20 minutes,20 minutes',
    directions:
      'Crumble sausage into a Dutch oven; add onion. Cook and stir over medium heat until meat is no longer pink. Add garlic; cook 1 minute longer. Stir in the broth, water and tomatoes. Bring to a boil.^&*Add tortellini; return to a boil. Cook for 5-8 minutes or until almost tender, stirring occasionally. Reduce heat; add the spinach, basil, pepper and pepper flakes. Cook 2-3 minutes longer or until spinach is wilted and tortellini are tender. Serve with cheese if desired.',
    user_id: 5,
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipedata);

module.exports = seedRecipes;

//the recipes in these post seeds were found at: https://www.tasteofhome.com/collection/our-100-highest-rated-recipes-ever/
