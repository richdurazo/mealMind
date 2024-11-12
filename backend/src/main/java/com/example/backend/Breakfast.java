package com.example.backend;

public class Breakfast extends Meal {
    private boolean isQuick;

    public Breakfast(String name, String description, int calories, boolean isQuick) {
        super(name, description, calories);
        this.isQuick = isQuick;
    }

    public boolean isQuick() {
        return isQuick;
    }

    public void setQuick(boolean isQuick) {
        this.isQuick = isQuick;
    }
}
