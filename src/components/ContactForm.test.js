import React from "react";
import { render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";
import App from '../App';

test("renders ContactForm without crashing", () => {
    render(<ContactForm />);
});

describe('renders the form inputs', () => {
    test('renders first name input', () => {
        const contactForm = render(<ContactForm />);

        const firstName = screen.getByPlaceholderText('Edd')
        // console.log('firstname', firstName)

        expect(firstName).toBeInTheDocument();
        // expect(firstName).toHaveTextContent('')
    })
})