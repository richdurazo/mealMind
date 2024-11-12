package com.example.backend;

import java.util.ArrayList;
import java.util.List;

public class MealSuggestionEngine {
    public List<Meal> generateSuggestions(UserProfile userProfile, List<Meal> allMeals) {
        List<Meal> suggestedMeals = new ArrayList<>();

        for (Meal meal : allMeals) {
            boolean matchesPreferences = true;
            for (String preference : userProfile.getDietaryPreferences()) {
                if (!meal.getIngredients().contains(preference)) {
                    matchesPreferences = false;
                    break;
                }
            }
            if (matchesPreferences) {
                suggestedMeals.add(meal);
            }
        }
        return suggestedMeals;
    }
}
