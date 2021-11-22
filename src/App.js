import React from "react";
import { useGlobalContext } from "./helpers/context";

import SetupForm from "./components/SetupForm";
import Loading from "./components/Loading";
import Modal from "./components/Modal";

function App() {
  const { waiting, loading, questions, index, correct } = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }
  return <main>Quiz App</main>;
}

export default App;
