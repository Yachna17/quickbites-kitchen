import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";
import { getRecipeBySlug, getAllRecipes } from "@/data/recipes";
import styles from "./page.module.css";
import Script from "next/script";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static paths for all recipes
export async function generateStaticParams() {
  const recipes = getAllRecipes();
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

// Generate dynamic SEO metadata
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    return {
      title: "Recipe Not Found",
    };
  }

  return {
    title: recipe.title,
    description: recipe.description,
    openGraph: {
      title: recipe.title,
      description: recipe.description,
      images: [recipe.image],
      type: "article",
      publishedTime: recipe.publishedAt,
      authors: ["QuickBites Kitchen"],
    },
  };
}

export default async function RecipePage({ params }: Props) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  // Generate JSON-LD schema for Recipe
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": recipe.title,
    "image": [recipe.image],
    "author": {
      "@type": "Organization",
      "name": "QuickBites Kitchen"
    },
    "datePublished": recipe.publishedAt,
    "description": recipe.description,
    "prepTime": `PT${recipe.prepTime}M`,
    "cookTime": `PT${recipe.cookTime}M`,
    "totalTime": `PT${recipe.prepTime + recipe.cookTime}M`,
    "recipeYield": `${recipe.servings} servings`,
    "recipeCategory": recipe.category,
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": `${recipe.nutrition.calories} calories`,
      "proteinContent": recipe.nutrition.protein,
      "carbohydrateContent": recipe.nutrition.carbs,
      "fatContent": recipe.nutrition.fat
    },
    "recipeIngredient": recipe.ingredients,
    "recipeInstructions": recipe.instructions.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "text": step
    }))
  };

  return (
    <>
      <Script
        id="recipe-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className={styles.recipeArticle}>
        <div className={styles.heroSection} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${recipe.image})` }}>
          <div className={`container ${styles.heroContent}`}>
            <Link href={`/category/${recipe.category.toLowerCase()}`} className={styles.categoryTag}>
              {recipe.category}
            </Link>
            <h1 className={styles.title}>{recipe.title}</h1>
            <div className={styles.metaInfo}>
              <div className={styles.metaItem}>
                <span>Prep:</span> {recipe.prepTime} mins
              </div>
              <div className={styles.metaItem}>
                <span>Cook:</span> {recipe.cookTime} mins
              </div>
              <div className={styles.metaItem}>
                <span>Yields:</span> {recipe.servings} servings
              </div>
            </div>
          </div>
        </div>

        <div className={`container ${styles.contentLayout}`}>
          <main className={styles.mainContent}>
            <p className={styles.description}>{recipe.description}</p>
            
            <div className={styles.actionButtons}>
              <button className={`btn btn-outline ${styles.printBtn}`}>
                Print Recipe
              </button>
            </div>

            <section className={styles.ingredientsSection}>
              <h2>Ingredients</h2>
              <ul className={styles.ingredientsList}>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <label className={styles.checkboxLabel}>
                      <input type="checkbox" />
                      <span>{ingredient}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </section>

            <section className={styles.instructionsSection}>
              <h2>Instructions</h2>
              <ol className={styles.instructionsList}>
                {recipe.instructions.map((step, index) => (
                  <li key={index}>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </section>
          </main>

          <aside className={styles.sidebar}>
            <div className={styles.nutritionCard}>
              <h3>Nutrition Info</h3>
              <div className={styles.nutritionGrid}>
                <div className={styles.nutrient}>
                  <span className={styles.nutrientValue}>{recipe.nutrition.calories}</span>
                  <span className={styles.nutrientLabel}>Calories</span>
                </div>
                <div className={styles.nutrient}>
                  <span className={styles.nutrientValue}>{recipe.nutrition.protein}</span>
                  <span className={styles.nutrientLabel}>Protein</span>
                </div>
                <div className={styles.nutrient}>
                  <span className={styles.nutrientValue}>{recipe.nutrition.carbs}</span>
                  <span className={styles.nutrientLabel}>Carbs</span>
                </div>
                <div className={styles.nutrient}>
                  <span className={styles.nutrientValue}>{recipe.nutrition.fat}</span>
                  <span className={styles.nutrientLabel}>Fat</span>
                </div>
              </div>
              <p className={styles.nutritionDisclaimer}>
                * Nutritional information is estimated and may vary based on specific ingredients used.
              </p>
            </div>

            <div className={styles.tagsCard}>
              <h3>Tags</h3>
              <div className={styles.tagsContainer}>
                {recipe.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
