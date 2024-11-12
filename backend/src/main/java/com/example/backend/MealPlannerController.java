package com.example.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/meal-planner")
public class MealPlannerController {

    @Autowired
    private MealService mealService;

    @Autowired
    private UserProfileService userProfileService;

    @GetMapping("/meals")
    public List<Meal> getAvailableMeals() {
        return mealService.getAvailableMeals();
    }

    @GetMapping("/suggestions")
    public List<Meal> getMealSuggestions() {
        UserProfile userProfile = userProfileService.getUserProfile();
        return mealService.suggestMeals(userProfile);
    }

    @GetMapping("/user")
    public UserProfile getUserProfile() {
        return userProfileService.getUserProfile();
    }
}
