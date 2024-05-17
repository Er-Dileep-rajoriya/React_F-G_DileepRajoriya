// src/App.js
import React, { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import SubmissionsList from "./components/SubmissionsList";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #eef;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const TabButton = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#ddd" : "#fff")};
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

const App = () => {
  const [activeTab, setActiveTab] = useState("feedback");

  return (
    <AppContainer>
      <TabContainer>
        <TabButton
          active={activeTab === "feedback"}
          onClick={() => setActiveTab("feedback")}
        >
          Feedback Form
        </TabButton>
        <TabButton
          active={activeTab === "submissions"}
          onClick={() => setActiveTab("submissions")}
        >
          View Submissions
        </TabButton>
      </TabContainer>
      {activeTab === "feedback" && <FeedbackForm />}
      {activeTab === "submissions" && <SubmissionsList />}
    </AppContainer>
  );
};

export default App;
