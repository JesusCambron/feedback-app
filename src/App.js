import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";

import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";

const App = () => {
  return (
    <FeedbackProvider>
      <Header />
      <Routes>
        <Route
          index
          element={
            <>
              <main className="feedback-container">
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
                <AboutIconLink />
              </main>
            </>
          }
        />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </FeedbackProvider>
  );
};

export default App;
