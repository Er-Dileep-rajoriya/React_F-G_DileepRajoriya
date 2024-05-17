// src/FeedbackForm.js
import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 500px;
  background-color: #f9f9f9;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
`;

const Label = styled.label`
  font-weight: bold;
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const ErrorMessage = styled.div`
  color: red;
  margin: 10px 0;
`;

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    serviceQuality: "",
    beverageQuality: "",
    cleanliness: "",
    diningExperience: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.customerName)
      formErrors.customerName = "Customer Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Valid Email is required";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      formErrors.phone = "Valid Phone Number is required";
    if (!formData.serviceQuality)
      formErrors.serviceQuality = "Please rate the service quality";
    if (!formData.beverageQuality)
      formErrors.beverageQuality = "Please rate the beverage quality";
    if (!formData.cleanliness)
      formErrors.cleanliness = "Please rate the cleanliness";
    if (!formData.diningExperience)
      formErrors.diningExperience = "Please rate the dining experience";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      localStorage.setItem(
        "feedback",
        JSON.stringify([...getFeedbacks(), formData])
      );
      setSubmitted(true);
    } else {
      setErrors(formErrors);
      setSubmitted(false);
    }
  };

  const getFeedbacks = () => {
    return JSON.parse(localStorage.getItem("feedback")) || [];
  };

  return (
    <FormContainer>
      <h2>Aromatic Bar</h2>
      <p>
        We are committed to providing you with the best dining experience
        possible, so we welcome your comments. Please fill out this
        questionnaire. Thank you.
      </p>
      <form onSubmit={handleSubmit}>
        <Label>Customer Name:</Label>
        <Input
          type="text"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
        />
        {errors.customerName && (
          <ErrorMessage>{errors.customerName}</ErrorMessage>
        )}

        <Label>Email:</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

        <Label>Phone:</Label>
        <Input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}

        <Label>
          Please rate the quality of the service you received from your host:
        </Label>
        <CheckboxContainer>
          <Label>
            <Input
              type="radio"
              name="serviceQuality"
              value="Excellent"
              onChange={handleChange}
            />{" "}
            Excellent
          </Label>
          <Label>
            <Input
              type="radio"
              name="serviceQuality"
              value="Good"
              onChange={handleChange}
            />{" "}
            Good
          </Label>
          <Label>
            <Input
              type="radio"
              name="serviceQuality"
              value="Fair"
              onChange={handleChange}
            />{" "}
            Fair
          </Label>
          <Label>
            <Input
              type="radio"
              name="serviceQuality"
              value="Bad"
              onChange={handleChange}
            />{" "}
            Bad
          </Label>
        </CheckboxContainer>
        {errors.serviceQuality && (
          <ErrorMessage>{errors.serviceQuality}</ErrorMessage>
        )}

        <Label>Please rate the quality of your beverage:</Label>
        <CheckboxContainer>
          <Label>
            <Input
              type="radio"
              name="beverageQuality"
              value="Excellent"
              onChange={handleChange}
            />{" "}
            Excellent
          </Label>
          <Label>
            <Input
              type="radio"
              name="beverageQuality"
              value="Good"
              onChange={handleChange}
            />{" "}
            Good
          </Label>
          <Label>
            <Input
              type="radio"
              name="beverageQuality"
              value="Fair"
              onChange={handleChange}
            />{" "}
            Fair
          </Label>
          <Label>
            <Input
              type="radio"
              name="beverageQuality"
              value="Bad"
              onChange={handleChange}
            />{" "}
            Bad
          </Label>
        </CheckboxContainer>
        {errors.beverageQuality && (
          <ErrorMessage>{errors.beverageQuality}</ErrorMessage>
        )}

        <Label>Was our restaurant clean?</Label>
        <CheckboxContainer>
          <Label>
            <Input
              type="radio"
              name="cleanliness"
              value="Excellent"
              onChange={handleChange}
            />{" "}
            Excellent
          </Label>
          <Label>
            <Input
              type="radio"
              name="cleanliness"
              value="Good"
              onChange={handleChange}
            />{" "}
            Good
          </Label>
          <Label>
            <Input
              type="radio"
              name="cleanliness"
              value="Fair"
              onChange={handleChange}
            />{" "}
            Fair
          </Label>
          <Label>
            <Input
              type="radio"
              name="cleanliness"
              value="Bad"
              onChange={handleChange}
            />{" "}
            Bad
          </Label>
        </CheckboxContainer>
        {errors.cleanliness && (
          <ErrorMessage>{errors.cleanliness}</ErrorMessage>
        )}

        <Label>Please rate your overall dining experience:</Label>
        <CheckboxContainer>
          <Label>
            <Input
              type="radio"
              name="diningExperience"
              value="Excellent"
              onChange={handleChange}
            />{" "}
            Excellent
          </Label>
          <Label>
            <Input
              type="radio"
              name="diningExperience"
              value="Good"
              onChange={handleChange}
            />{" "}
            Good
          </Label>
          <Label>
            <Input
              type="radio"
              name="diningExperience"
              value="Fair"
              onChange={handleChange}
            />{" "}
            Fair
          </Label>
          <Label>
            <Input
              type="radio"
              name="diningExperience"
              value="Bad"
              onChange={handleChange}
            />{" "}
            Bad
          </Label>
        </CheckboxContainer>
        {errors.diningExperience && (
          <ErrorMessage>{errors.diningExperience}</ErrorMessage>
        )}

        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Thank you for completing the information.</p>}
    </FormContainer>
  );
};

export default FeedbackForm;
