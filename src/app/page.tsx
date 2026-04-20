import Link from "next/link";
import { getAllRecipes } from "@/data/recipes";
import RecipeCard from "@/components/RecipeCard";
import styles from "./page.module.css";

export default function Home() {
  const recipes = getAllRecipes();
  
  // Get latest 6 recipes for the grid
  const latestRecipes = recipes.slice(0, 6);

  return (
    <div className={styles.homeContainer}>
      {/* Dynamic App-Like Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroTextContent}>
            <span className={`animate-fade-in ${styles.badge}`}>✨ Fast & Delicious</span>
            <h1 className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Healthy Meals in <span className="text-gradient">15 Minutes</span>
            </h1>
            <p className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Say goodbye to hours in the kitchen. Discover our vibrant collection of quick, nutritious recipes that fit your busy life.
            </p>
            <div className={styles.heroActions} style={{ animationDelay: "0.3s" }}>
              <Link href="/category/dinner" className="btn btn-primary animate-fade-in">
                Find Dinner Ideas
              </Link>
              <Link href="/about" className={`btn btn-outline animate-fade-in ${styles.secondaryBtn}`}>
                How It Works
              </Link>
            </div>
          </div>
          
          <div className={`animate-fade-in ${styles.heroImageGrid}`} style={{ animationDelay: "0.4s" }}>
            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Healthy Bowl" className={`${styles.heroImg} ${styles.imgTop}`} />
            <img src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Glazed Salmon" className={`${styles.heroImg} ${styles.imgBottom}`} />
            <div className={styles.floatingCard}>
              <div className={styles.floatingCardIcon}>🔥</div>
              <div className={styles.floatingCardText}>
                <strong>Trending Now</strong>
                <span>Honey Garlic Salmon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vibrant Categories */}
      <section className={`section container`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What are you craving?</h2>
        </div>
        <div className={styles.categoryPills}>
          <Link href="/category/breakfast" className={styles.categoryPill}>
            <span className={styles.pillEmoji}>🥞</span>
            <span>Breakfast</span>
          </Link>
          <Link href="/category/lunch" className={styles.categoryPill}>
            <span className={styles.pillEmoji}>🥗</span>
            <span>Lunch</span>
          </Link>
          <Link href="/category/dinner" className={styles.categoryPill}>
            <span className={styles.pillEmoji}>🍝</span>
            <span>Dinner</span>
          </Link>
          <Link href="/category/snacks" className={styles.categoryPill}>
            <span className={styles.pillEmoji}>🍎</span>
            <span>Snacks</span>
          </Link>
        </div>
      </section>

      {/* Latest Recipes Grid */}
      <section className={`section container ${styles.lightBg}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Fresh & Fast Recipes</h2>
          <Link href="/search" className={styles.viewAll}>
            Explore All &rarr;
          </Link>
        </div>
        <div className={styles.recipeGrid}>
          {latestRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* Energetic Newsletter CTA */}
      <section className={`section container`}>
        <div className={styles.ctaBox}>
          <div className={styles.ctaContent}>
            <h2>Get Weekly Meal Plans</h2>
            <p>Join our community of busy people eating better in less time.</p>
            <form className={styles.ctaForm}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className="btn btn-primary" style={{ background: '#1c1c1c', color: 'white', boxShadow: 'none' }}>Join Now</button>
            </form>
          </div>
          <div className={styles.ctaPattern}></div>
        </div>
      </section>
    </div>
  );
}
