export interface Recipe {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
  ingredients: string[];
  instructions: string[];
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  publishedAt: string;
  rating: number; // New property
}

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "15-Minute Masala Oats Recipe for Weight Loss",
    slug: "15-minute-masala-oats",
    description: "A spicy, savory Indian-style oatmeal packed with vegetables. Perfect for a quick, healthy breakfast that aids in weight loss.",
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Breakfast",
    tags: ["Vegetarian", "Under 15 mins", "Weight Loss", "High Fiber"],
    prepTime: 5,
    cookTime: 10,
    servings: 1,
    ingredients: [
      "1/2 cup rolled oats",
      "1/4 cup finely chopped onions",
      "1/4 cup finely chopped tomatoes",
      "1/4 cup mixed vegetables (peas, carrots)",
      "1/2 tsp ginger-garlic paste",
      "1/4 tsp turmeric powder",
      "1/2 tsp garam masala",
      "1/4 tsp red chili powder",
      "1 tsp olive oil or ghee",
      "1.5 cups water",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    instructions: [
      "Heat oil in a pan over medium heat. Add onions and sauté until translucent.",
      "Add ginger-garlic paste and cook for 30 seconds.",
      "Add tomatoes, mixed vegetables, turmeric, garam masala, chili powder, and salt. Cook until tomatoes are soft.",
      "Add rolled oats and roast for 1-2 minutes with the masala.",
      "Pour in water, stir well, and bring to a boil. Reduce heat and simmer for 5-7 minutes until oats are cooked and reach desired consistency.",
      "Garnish with fresh coriander and serve hot."
    ],
    nutrition: {
      calories: 210,
      protein: "8g",
      carbs: "35g",
      fat: "5g"
    },
    publishedAt: "2024-05-10T08:00:00Z",
    rating: 4.8
  },
  {
    id: "2",
    title: "Quick Paneer Bhurji Wrap — Ready in 10 Minutes",
    slug: "quick-paneer-bhurji-wrap",
    description: "A high-protein vegetarian wrap filled with spiced scrambled paneer. The ultimate grab-and-go lunch for busy days.",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Lunch",
    tags: ["Vegetarian", "High Protein", "Under 15 mins", "Lunchbox"],
    prepTime: 5,
    cookTime: 5,
    servings: 2,
    ingredients: [
      "2 whole wheat tortillas or rotis",
      "200g paneer, crumbled",
      "1 small onion, finely chopped",
      "1 small tomato, finely chopped",
      "1 green chili, chopped (optional)",
      "1/2 tsp cumin seeds",
      "1/2 tsp pav bhaji masala or garam masala",
      "1 tsp oil",
      "Salt to taste",
      "Mint chutney for spreading"
    ],
    instructions: [
      "Heat oil in a pan. Add cumin seeds and let them splutter.",
      "Add chopped onions and green chili. Sauté until onions turn pink.",
      "Add tomatoes, salt, and masala. Cook until tomatoes soften (about 2 mins).",
      "Add crumbled paneer, mix well, and cook for another 1-2 minutes. Turn off the heat.",
      "Warm the tortillas on a pan.",
      "Spread a spoonful of mint chutney on each tortilla, add the paneer filling in the center, and roll tightly into a wrap."
    ],
    nutrition: {
      calories: 320,
      protein: "18g",
      carbs: "25g",
      fat: "16g"
    },
    publishedAt: "2024-05-12T10:00:00Z",
    rating: 4.7
  },
  {
    id: "3",
    title: "High-Protein Overnight Oats (5 Variations)",
    slug: "high-protein-overnight-oats",
    description: "Wake up to a ready-to-eat, protein-packed breakfast. We share the base recipe plus 5 delicious flavor variations.",
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Breakfast",
    tags: ["Meal Prep", "High Protein", "No Cook", "Vegetarian"],
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    ingredients: [
      "1/2 cup rolled oats",
      "1 scoop vanilla protein powder",
      "1/2 cup almond milk (or milk of choice)",
      "1/4 cup Greek yogurt",
      "1 tbsp chia seeds",
      "1 tsp maple syrup (optional)",
      "Flavor mix-ins (berries, nuts, peanut butter)"
    ],
    instructions: [
      "In a jar or container, mix oats, protein powder, and chia seeds.",
      "Add milk, Greek yogurt, and maple syrup. Stir until completely combined and no dry spots remain.",
      "Fold in your chosen flavor mix-ins.",
      "Cover and refrigerate overnight (or for at least 4 hours).",
      "In the morning, give it a quick stir. Add a splash of milk if it's too thick, and enjoy!"
    ],
    nutrition: {
      calories: 350,
      protein: "32g",
      carbs: "40g",
      fat: "9g"
    },
    publishedAt: "2024-05-15T07:00:00Z",
    rating: 4.9
  },
  {
    id: "4",
    title: "Easy One-Pan Pasta Recipe for College Students",
    slug: "easy-one-pan-pasta",
    description: "Toss all ingredients into one pan, boil, and eat! Minimal cleanup, budget-friendly, and ready in 15 minutes.",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Dinner",
    tags: ["Budget", "One Pan", "Under 15 mins", "Vegan"],
    prepTime: 2,
    cookTime: 12,
    servings: 2,
    ingredients: [
      "8 oz linguine or spaghetti",
      "12 oz cherry tomatoes, halved",
      "1 onion, thinly sliced",
      "4 cloves garlic, thinly sliced",
      "1/2 tsp red pepper flakes",
      "2 sprigs fresh basil",
      "2 tbsp extra-virgin olive oil",
      "4.5 cups water or vegetable broth",
      "Salt and black pepper to taste",
      "Parmesan cheese for serving (optional)"
    ],
    instructions: [
      "Place pasta, tomatoes, onion, garlic, red pepper flakes, basil, oil, salt, pepper, and water in a large straight-sided skillet.",
      "Bring the mixture to a boil over high heat.",
      "Boil the mixture, stirring and turning pasta frequently with tongs, until pasta is al dente and water has nearly evaporated (about 9-10 minutes).",
      "Remove from heat, adjust seasoning if needed. Garnish with more basil and parmesan."
    ],
    nutrition: {
      calories: 410,
      protein: "12g",
      carbs: "75g",
      fat: "10g"
    },
    publishedAt: "2024-05-18T16:00:00Z",
    rating: 4.6
  },
  {
    id: "5",
    title: "3-Ingredient Banana Pancakes (No Flour)",
    slug: "3-ingredient-banana-pancakes",
    description: "Naturally sweet and gluten-free, these quick banana pancakes are made without flour or added sugar.",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Breakfast",
    tags: ["Gluten-Free", "Under 15 mins", "Kid-Friendly", "Dairy-Free"],
    prepTime: 5,
    cookTime: 10,
    servings: 1,
    ingredients: [
      "1 large ripe banana",
      "2 large eggs",
      "1/8 tsp cinnamon (optional but recommended)",
      "Butter or coconut oil for cooking"
    ],
    instructions: [
      "In a bowl, mash the banana completely until no large lumps remain.",
      "Whisk in the eggs and cinnamon until well combined. The batter will be thin.",
      "Heat a non-stick skillet over medium-low heat and melt a little butter or oil.",
      "Pour 2 tablespoons of batter per pancake. Cook for 1-2 minutes until the edges look set and the bottom is golden brown.",
      "Carefully flip and cook for another minute. Serve immediately with fresh fruit or maple syrup."
    ],
    nutrition: {
      calories: 250,
      protein: "14g",
      carbs: "27g",
      fat: "10g"
    },
    publishedAt: "2024-05-20T08:30:00Z",
    rating: 4.8
  },
  {
    id: "6",
    title: "15-Minute Honey Garlic Glazed Salmon",
    slug: "15-minute-honey-garlic-salmon",
    description: "Flaky, tender salmon fillets coated in a sticky, sweet, and savory honey garlic glaze. A restaurant-quality dinner in minutes.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Dinner",
    tags: ["High Protein", "Under 15 mins", "Pescatarian", "Low Carb"],
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    ingredients: [
      "2 salmon fillets (about 6 oz each)",
      "Salt and pepper to taste",
      "1 tbsp olive oil",
      "3 cloves garlic, minced",
      "3 tbsp honey",
      "2 tbsp soy sauce or tamari",
      "1 tbsp lemon juice",
      "Green onions for garnish"
    ],
    instructions: [
      "Season the salmon fillets with salt and pepper on both sides.",
      "Heat olive oil in a skillet over medium-high heat. Sear the salmon skin-side up for 3-4 minutes until golden crust forms.",
      "Flip the salmon. Reduce heat to medium.",
      "In a small bowl, whisk together garlic, honey, soy sauce, and lemon juice. Pour over the salmon.",
      "Cook for another 3-4 minutes, spooning the glaze over the salmon as it thickens. Garnish with green onions."
    ],
    nutrition: {
      calories: 380,
      protein: "34g",
      carbs: "18g",
      fat: "19g"
    },
    publishedAt: "2024-06-01T17:00:00Z",
    rating: 4.9
  },
  {
    id: "7",
    title: "Speedy Lemon Butter Chicken",
    slug: "speedy-lemon-butter-chicken",
    description: "Juicy chicken breast cutlets pan-fried and smothered in a rich, tangy lemon butter sauce. Perfectly paired with a side salad.",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Dinner",
    tags: ["High Protein", "Under 15 mins", "Keto", "One Pan"],
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    ingredients: [
      "2 large chicken breasts, sliced in half horizontally",
      "Salt and black pepper to taste",
      "1 tbsp olive oil",
      "2 tbsp unsalted butter",
      "3 cloves garlic, minced",
      "1/4 cup chicken broth",
      "2 tbsp fresh lemon juice",
      "Fresh parsley, chopped"
    ],
    instructions: [
      "Season chicken cutlets with salt and pepper.",
      "Heat olive oil in a large skillet over medium-high heat. Cook chicken for 3-4 minutes per side until golden and cooked through. Remove to a plate.",
      "In the same skillet, reduce heat to medium. Melt butter and add garlic; cook for 1 minute.",
      "Stir in chicken broth and lemon juice, scraping up any browned bits. Simmer for 2 minutes to thicken slightly.",
      "Return chicken to the skillet, spoon sauce over it, and garnish with parsley."
    ],
    nutrition: {
      calories: 320,
      protein: "45g",
      carbs: "3g",
      fat: "14g"
    },
    publishedAt: "2024-06-05T18:00:00Z",
    rating: 4.7
  },
  {
    id: "8",
    title: "Vibrant Mediterranean Chickpea Salad",
    slug: "vibrant-mediterranean-chickpea-salad",
    description: "A refreshing, crunchy, and protein-packed salad loaded with cucumbers, tomatoes, feta, and a zesty lemon dressing.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Lunch",
    tags: ["Vegetarian", "No Cook", "Under 15 mins", "Gluten-Free"],
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    ingredients: [
      "1 can (15 oz) chickpeas, rinsed and drained",
      "1 cup cherry tomatoes, halved",
      "1 cucumber, diced",
      "1/2 red onion, finely chopped",
      "1/2 cup feta cheese, crumbled",
      "1/4 cup Kalamata olives, sliced",
      "3 tbsp extra virgin olive oil",
      "2 tbsp lemon juice",
      "1 tsp dried oregano",
      "Salt and pepper to taste"
    ],
    instructions: [
      "In a large bowl, combine the chickpeas, cherry tomatoes, cucumber, red onion, feta, and olives.",
      "In a small jar, whisk together the olive oil, lemon juice, oregano, salt, and pepper.",
      "Pour the dressing over the salad and toss well to combine.",
      "Serve immediately, or refrigerate for 30 minutes to let the flavors meld."
    ],
    nutrition: {
      calories: 310,
      protein: "10g",
      carbs: "24g",
      fat: "20g"
    },
    publishedAt: "2024-06-10T12:00:00Z",
    rating: 4.8
  },
  {
    id: "9",
    title: "Spicy Tuna Crunch Wrap",
    slug: "spicy-tuna-crunch-wrap",
    description: "Elevate your canned tuna! This wrap is filled with spicy mayo tuna, crunchy veggies, and wrapped in a warm tortilla.",
    image: "https://images.unsplash.com/photo-1540914124281-342587941fa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Lunch",
    tags: ["High Protein", "Under 15 mins", "Budget"],
    prepTime: 10,
    cookTime: 0,
    servings: 1,
    ingredients: [
      "1 can (5 oz) tuna in water, drained well",
      "2 tbsp Greek yogurt or mayonnaise",
      "1 tbsp sriracha or hot sauce",
      "1/4 cup diced celery",
      "1/4 cup diced red onion",
      "1 large whole wheat tortilla",
      "1/2 cup shredded lettuce",
      "1/4 avocado, sliced"
    ],
    instructions: [
      "In a bowl, flake the tuna with a fork. Stir in the Greek yogurt (or mayo), sriracha, celery, and red onion. Mix well.",
      "Lay the tortilla flat. Place the shredded lettuce in the center.",
      "Top with the spicy tuna mixture and avocado slices.",
      "Fold in the sides of the tortilla, then roll tightly from the bottom up.",
      "Cut in half and serve immediately."
    ],
    nutrition: {
      calories: 340,
      protein: "32g",
      carbs: "28g",
      fat: "11g"
    },
    publishedAt: "2024-06-12T13:00:00Z",
    rating: 4.6
  },
  {
    id: "10",
    title: "Energy-Boosting Peanut Butter Apple Bites",
    slug: "peanut-butter-apple-bites",
    description: "The perfect sweet and crunchy snack to beat the afternoon slump. Ready in 5 minutes with just 3 ingredients.",
    image: "https://images.unsplash.com/photo-1568827999242-df8670bcaf3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Snacks",
    tags: ["Kid-Friendly", "Under 15 mins", "Vegetarian", "No Cook"],
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    ingredients: [
      "1 large crisp apple (like Honeycrisp or Fuji)",
      "3 tbsp creamy or chunky peanut butter",
      "1 tbsp mini chocolate chips or granola"
    ],
    instructions: [
      "Core the apple and cut it into rounds (about 1/4 inch thick) to make 'donuts', or just slice into wedges.",
      "Spread a layer of peanut butter over one side of each apple slice.",
      "Sprinkle the mini chocolate chips or granola over the peanut butter.",
      "Serve immediately for a satisfying crunch."
    ],
    nutrition: {
      calories: 250,
      protein: "7g",
      carbs: "28g",
      fat: "14g"
    },
    publishedAt: "2024-06-15T15:00:00Z",
    rating: 4.9
  },
  {
    id: "11",
    title: "Spicy Roasted Crunchy Chickpeas",
    slug: "spicy-roasted-chickpeas",
    description: "A savory, crunchy snack packed with protein and fiber. Seasoned with smoked paprika, garlic, and a hint of cayenne.",
    image: "https://images.unsplash.com/photo-1582285149880-9280931dbd15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Snacks",
    tags: ["Vegan", "High Protein", "Under 15 mins", "Gluten-Free"],
    prepTime: 2,
    cookTime: 13,
    servings: 2,
    ingredients: [
      "1 can (15 oz) chickpeas, rinsed and thoroughly dried",
      "1 tbsp olive oil",
      "1/2 tsp smoked paprika",
      "1/2 tsp garlic powder",
      "1/4 tsp cayenne pepper (optional)",
      "1/2 tsp sea salt"
    ],
    instructions: [
      "Pat the rinsed chickpeas completely dry with a paper towel. (Drying them is the secret to the crunch!)",
      "In a bowl, toss the chickpeas with olive oil, paprika, garlic powder, cayenne, and salt until evenly coated.",
      "Spread them in a single layer on a microwave-safe plate or air fryer basket.",
      "Air fry at 390°F for 12-15 minutes, shaking the basket halfway through, until crispy. (Or roast in oven if preferred).",
      "Let cool slightly before serving; they get crunchier as they cool."
    ],
    nutrition: {
      calories: 190,
      protein: "7g",
      carbs: "22g",
      fat: "8g"
    },
    publishedAt: "2024-06-18T10:00:00Z",
    rating: 4.7
  },
  {
    id: "12",
    title: "15-Minute Caprese Skewers",
    slug: "15-minute-caprese-skewers",
    description: "Elegant, refreshing, and incredibly simple. Cherry tomatoes, fresh mozzarella, and basil drizzled with balsamic glaze.",
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Snacks",
    tags: ["Vegetarian", "No Cook", "Under 15 mins", "Party Snack"],
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    ingredients: [
      "1 pint cherry or grape tomatoes",
      "8 oz fresh mozzarella balls (ciliegine)",
      "1 bunch fresh basil leaves",
      "2 tbsp balsamic glaze",
      "1 tbsp extra virgin olive oil",
      "Sea salt and freshly ground black pepper to taste",
      "Wooden skewers or toothpicks"
    ],
    instructions: [
      "Wash the tomatoes and basil leaves.",
      "Thread one tomato, one basil leaf (folded in half if large), and one mozzarella ball onto each skewer.",
      "Arrange the skewers on a serving platter.",
      "Drizzle with olive oil and balsamic glaze right before serving.",
      "Sprinkle lightly with sea salt and black pepper."
    ],
    nutrition: {
      calories: 150,
      protein: "8g",
      carbs: "5g",
      fat: "11g"
    },
    publishedAt: "2024-06-20T14:30:00Z",
    rating: 4.8
  }
];

export function getAllRecipes(): Recipe[] {
  return recipes;
}

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.slug === slug);
}

export function getRecipesByCategory(category: string): Recipe[] {
  return recipes.filter(
    (recipe) => recipe.category.toLowerCase() === category.toLowerCase()
  );
}

export function searchRecipes(query: string): Recipe[] {
  const lowercaseQuery = query.toLowerCase();
  return recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(lowercaseQuery) ||
      recipe.description.toLowerCase().includes(lowercaseQuery) ||
      recipe.ingredients.some(i => i.toLowerCase().includes(lowercaseQuery))
  );
}
