import { getRecipesByCategory } from "@/data/recipes";
import RecipeCard from "@/components/RecipeCard";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

// Simple capitalize function
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = capitalize(slug);
  
  return {
    title: `${categoryName} Recipes`,
    description: `Browse our collection of healthy, 15-minute ${categoryName.toLowerCase()} recipes.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const recipes = getRecipesByCategory(slug);

  if (recipes.length === 0) {
    // If no recipes, we could 404 or just show an empty state. Let's show empty state to be safe.
  }

  const categoryName = capitalize(slug);

  return (
    <div className="container section">
      <div style={{ textAlign: 'center', marginBottom: '3rem', borderBottom: '2px solid var(--border)', paddingBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{categoryName} Recipes</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
          Quick, easy, and delicious {categoryName.toLowerCase()} ideas ready in 15 minutes or less.
        </p>
      </div>
      
      {recipes.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
          <h2>No recipes found in this category yet.</h2>
          <p>Check back soon for new delicious ideas!</p>
        </div>
      )}
    </div>
  );
}
