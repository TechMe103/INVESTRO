import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Hero from "../landing_pages/home/Hero";

//Test suite
describe("Hero component", () => {
    Test('renders hero image' , () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/homeHero.png");
    });
});