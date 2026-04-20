"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { searchRecipes, Recipe } from "@/data/recipes";
import RecipeCard from "@/components/RecipeCard";
import styles from "./page.module.css";
import { Suspense } from 'react';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<Recipe[]>([]);
  const [isSearching, setIsSearching] = useState(true);

  useEffect(() => {
    setIsSearching(true);
    // Simulate slight delay for realistic feeling
    const timer = setTimeout(() => {
      if (query) {
        setResults(searchRecipes(query));
      } else {
        setResults([]);
      }
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className={`container section ${styles.searchPage}`}>
      <h1 className={styles.title}>
        {query ? `Search Results for "${query}"` : "Search Recipes"}
      </h1>
      
      {isSearching ? (
        <div className={styles.loading}>Searching...</div>
      ) : results.length > 0 ? (
        <div className={styles.recipeGrid}>
          {results.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className={styles.noResults}>
          <p>No recipes found matching your criteria. Try adjusting your search or browse our categories.</p>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="container section">Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}
