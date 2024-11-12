package com.example.backend;

public class Lunch extends Meal {
    private boolean isHealthy;

    public Lunch(String name, String description, int calories, boolean isHealthy) {
        super(name, description, calories);
        this.isHealthy = isHealthy;
    }

    public boolean isHealthy() {
        return isHealthy;
    }

    public void setHealthy(boolean isHealthy) {
        this.isHealthy = isHealthy;
    }
}
