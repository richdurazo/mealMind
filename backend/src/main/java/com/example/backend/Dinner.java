package com.example.backend;

public class Dinner extends Meal {
    private boolean isFamilyFriendly;

    public Dinner(String name, String description, int calories, boolean isFamilyFriendly) {
        super(name, description, calories);
        this.isFamilyFriendly = isFamilyFriendly;
    }

    public boolean isFamilyFriendly() {
        return isFamilyFriendly;
    }

    public void setFamilyFriendly(boolean isFamilyFriendly) {
        this.isFamilyFriendly = isFamilyFriendly;
    }
}
