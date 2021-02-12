import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("testing for fun", () => {
    console.log("It's working!")
})


test("form header renders", () => {
    render (<CheckoutForm/>);

    const header = screen.queryByText(/checkout form/i);
    expect (header).toBeInTheDocument();


});

test("form shows success message on submit with form details", () => {

    render(<CheckoutForm/>);

    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);
    const button = screen.getByTestId('button');
    
    


    userEvent.type(firstName, "Tony");
    userEvent.type(lastName, "Yang");
    userEvent.type(address, "1234 Follow Me Dr.");
    userEvent.type(city, "Roseweed");
    userEvent.type(state, "Alaska");
    userEvent.type(zip, "91114");
    userEvent.click(button);
    
    


    expect(firstName).toHaveValue("Tony");
    expect(lastName).toHaveValue("Yang");
    expect(address).toHaveValue("1234 Follow Me Dr.");
    expect(city).toHaveValue("Roseweed");
    expect(state).toHaveValue("Alaska");
    expect(zip).toHaveValue("91114");
    


    const message = screen.getByTestId('successMessage');
    expect(message).toBeInTheDocument();


});
