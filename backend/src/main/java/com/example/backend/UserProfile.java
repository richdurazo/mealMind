package com.example.backend;

import java.util.ArrayList;
import java.util.List;

public class UserProfile {

    // Attributes
    private String username;
    private List<String> dietaryPreferences;  // e.g., "vegetarian", "vegan", "gluten-free"
    private List<Meal> favoriteMeals;         // List of favorite meals selected by the user

    // Constructor
    public UserProfile(String username) {
        this.username = username;
        this.dietaryPreferences = new ArrayList<>();
        this.favoriteMeals = new ArrayList<>();
    }

    // Getters and Setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<String> getDietaryPreferences() {
        return dietaryPreferences;
    }

    public void setDietaryPreferences(List<String> dietaryPreferences) {
        this.dietaryPreferences = dietaryPreferences;
    }

    public List<Meal> getFavoriteMeals() {
        return favoriteMeals;
    }

    public void setFavoriteMeals(List<Meal> favoriteMeals) {
        this.favoriteMeals = favoriteMeals;
    }

    // Methods to Add Dietary Preferences and Favorite Meals
    public void addDietaryPreference(String preference) {
        if (!dietaryPreferences.contains(preference)) {
            dietaryPreferences.add(preference);
        }
    }

    public void addFavoriteMeal(Meal meal) {
        if (!favoriteMeals.contains(meal)) {
            favoriteMeals.add(meal);
        }
    }

    // Method to Remove Dietary Preferences
    public void removeDietaryPreference(String preference) {
        dietaryPreferences.remove(preference);
    }

    // Method to Remove Favorite Meal
    public void removeFavoriteMeal(Meal meal) {
        favoriteMeals.remove(meal);
    }

    // A helper method to display user information (for testing)
    public void displayUserInfo() {
        System.out.println("Username: " + username);
        System.out.println("Dietary Preferences: " + dietaryPreferences);
        System.out.println("Favorite Meals: ");
        for (Meal meal : favoriteMeals) {
            System.out.println("- " + meal.getName());
        }
    }
}
