package com.example.backend;

import java.util.ArrayList;
import java.util.List;

public class Meal {
    private String name;
    private String description;
    private int calories;
    private List<String> ingredients;

    public Meal(String name, String description, int calories) {
        this.name = name;
        this.description = description;
        this.calories = calories;
        this.ingredients = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public int getCalories() {
        return calories;
    }

    public List<String> getIngredients() {
        return ingredients;
    }

    public void addIngredient(String ingredient) {
        ingredients.add(ingredient);
    }
}
