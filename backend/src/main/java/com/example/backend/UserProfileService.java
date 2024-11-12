package com.example.backend;

import org.springframework.stereotype.Service;

@Service
public class UserProfileService {
    private UserProfile userProfile;

    public UserProfileService() {
        this.userProfile = new UserProfile("Richard");
        this.userProfile.addDietaryPreference("vegetarian");
    }

    public UserProfile getUserProfile() {
        return userProfile;
    }
}

