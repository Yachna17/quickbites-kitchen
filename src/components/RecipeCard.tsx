import Link from "next/link";
import styles from "./RecipeCard.module.css";
import { Recipe } from "@/data/recipes";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  // Simple function to generate star ratings based on number
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className={styles.ratingContainer}>
        <span className={styles.ratingNumber}>{rating.toFixed(1)}</span>
        <div className={styles.stars}>
          {[...Array(5)].map((_, i) => {
            if (i < fullStars) {
              return <span key={i} className={styles.starFull}>★</span>;
            } else if (i === fullStars && hasHalfStar) {
              return <span key={i} className={styles.starHalf}>★</span>; // Using CSS trick or just a slightly faded star
            } else {
              return <span key={i} className={styles.starEmpty}>☆</span>;
            }
          })}
        </div>
      </div>
    );
  };

  return (
    <Link href={`/recipes/${recipe.slug}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className={styles.image}
        />
        <div className={styles.categoryBadge}>{recipe.category}</div>
        
        {/* Dynamic Badges based on tags */}
        {recipe.tags.includes("Under 15 mins") && (
          <div className={styles.timeBadge}>⚡ 15 Min</div>
        )}
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          {renderStars(recipe.rating || 4.5)}
        </div>
        
        <h3 className={styles.title}>{recipe.title}</h3>
        
        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <strong>{recipe.prepTime + recipe.cookTime}</strong> mins
          </span>
          <span className={styles.metaItem}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <strong>{recipe.servings}</strong> servings
          </span>
          <span className={styles.metaItem}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19v-2a4 4 0 0 0-4-4h-3a4 4 0 0 0-4 4v2"></path><circle cx="10.5" cy="7" r="4"></circle><path d="M21 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <strong>{recipe.nutrition.calories}</strong>
          </span>
        </div>
        
        <p className={styles.excerpt}>{recipe.description.length > 80 ? recipe.description.substring(0, 80) + '...' : recipe.description}</p>
        
        <div className={styles.cardFooter}>
           <span className={styles.viewRecipeBtn}>View Recipe &rarr;</span>
        </div>
      </div>
    </Link>
  );
}
