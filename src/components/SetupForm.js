import React from "react";
import { useGlobalContext } from "../helpers/context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>Setup Quiz</h2>
          {/* amount */}
          {/* <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={20}
            />
          </div> */}
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <select
              name="amount"
              id="amount"
              className="form-input"
              value={quiz.amount}
              onChange={handleChange}
              className="form-input"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>

          {/* category */}
          <div className="form-control">
            <label htmlFor="category">category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="general knowledge">General Knowledge</option>
              <option value="politics">Politics</option>
              <option value="history">History</option>
              <option value="animals">Animals</option>
              <option value="mythology">Mythology</option>
              <option value="art">Art</option>
            </select>
          </div>

          {/* difficulty */}
          <div className="form-control">
            <label htmlFor="difficulty">difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>

          {/* Error */}
          {error && (
            <p className="error">
              can't generate questions, please try different options
            </p>
          )}
        </form>
        <button type="submit" onClick={handleSubmit} className="submit-btn">
          start
        </button>
      </section>
    </main>
  );
};

export default SetupForm;
