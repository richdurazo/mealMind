package com.example.backend;

import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class MealService {
    private List<Meal> availableMeals;

    public MealService() {
        this.availableMeals = new ArrayList<>();
        initializeMeals();
    }

    private void initializeMeals() {
        availableMeals.add(new Breakfast("Oatmeal", "Healthy oatmeal with fruits", 300, true));
        availableMeals.add(new Lunch("Salad", "Mixed greens with chicken", 400, true));
        availableMeals.add(new Dinner("Pasta", "Family-style pasta dinner", 600, true));
    }

    public List<Meal> getAvailableMeals() {
        return availableMeals;
    }

    public List<Meal> suggestMeals(UserProfile userProfile) {
        MealSuggestionEngine engine = new MealSuggestionEngine();
        return engine.generateSuggestions(userProfile, availableMeals);
    }
}
