import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const PHQ9App = () => {
  const [score, setScore] = React.useState(0);
  const [showWelcome, setShowWelcome] = React.useState(true);
  const [showForm, setShowForm] = React.useState(false);
  const [showResults, setShowResults] = React.useState(false);

  // Function to handle page transitions
  const showPage = (page, eScore = null) => {
    setShowWelcome(page === "welcome");
    setShowForm(page === "form");
    if (eScore !== null) {
      setScore(eScore);
      setShowResults(page === "results");
    }
  };

  return (
    <div className="container my-5">
      {showWelcome && <Welcome changePage={showPage} />}
      {showForm && <Form changePage={showPage} />}
      {showResults && <Results changePage={showPage} score={score} />}
    </div>
  );
};

// Welcome Component
const Welcome = ({ changePage }) => (
  <div className="text-center">
    <h1 className="mb-4">Welcome to the PHQ-9 Questionnaire</h1>
    <p className="lead">
      This test assesses the severity of depression over the past two weeks.
    </p>
    <button className="btn btn-primary btn-lg mt-4" onClick={() => changePage("form")}>
      Start PHQ-9
    </button>
  </div>
);

// Form Component
const Form = ({ changePage }) => {
  const questions = [
    "1. Little interest or pleasure in doing things",
    "2. Feeling down, depressed, or hopeless",
    "3. Trouble falling or staying asleep, or sleeping too much",
    "4. Feeling tired or having little energy",
    "5. Poor appetite or overeating",
    "6. Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
    "7. Trouble concentrating on things, such as reading the newspaper or watching television",
    "8. Moving or speaking so slowly that other people could have noticed. Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
    "9. Thoughts that you would be better off dead, or of hurting yourself",
  ];

  const [responses, setResponses] = React.useState(Array(9).fill(0));

  const handleChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = parseInt(value, 10);
    setResponses(newResponses);
  };

  const calculateScore = () => {
    return responses.reduce((total, num) => total + num, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalScore = calculateScore();
    changePage("results", totalScore);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-light rounded shadow">
      <h2 className="mb-4">PHQ-9 Questionnaire</h2>
      {questions.map((question, index) => (
        <div key={index} className="mb-4">
          <p>{question}</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={`question-${index}`}
              value={0}
              checked={responses[index] === 0}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            <label className="form-check-label">Not at all</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={`question-${index}`}
              value={1}
              checked={responses[index] === 1}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            <label className="form-check-label">Several days</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={`question-${index}`}
              value={2}
              checked={responses[index] === 2}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            <label className="form-check-label">More than half the days</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={`question-${index}`}
              value={3}
              checked={responses[index] === 3}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            <label className="form-check-label">Nearly every day</label>
          </div>
        </div>
      ))}
      <button type="submit" className="btn btn-success btn-lg">
        Submit
      </button>
    </form>
  );
};

// Results Component
const Results = ({ score, changePage }) => {
  const interpretScore = (score) => {
    if (score <= 4) return "No depression";
    if (score <= 9) return "Mild depression";
    if (score <= 14) return "Moderate depression";
    if (score <= 19) return "Moderately severe depression";
    return "Severe depression";
  };
  const severity = interpretScore(score);

  const psychologists = [
    { name: "Dr. Sarah Thompson", phone: "+123456789", website: "https://drsarahthompson.com" },
    { name: "Dr. John Doe", phone: "+987654321", website: "https://drjohndoeclinic.com" },
    { name: "Dr. Emily Carter", phone: "+1122334455", website: "https://dremilycarter.org" },
  ];

  return (
    <div className="text-center p-4 bg-light rounded shadow">
      <h1>Results</h1>
      <p className="display-4 mt-4">
        <strong>Total Score:</strong> {score}
      </p>
      <p className="lead">
        <strong>Severity:</strong> {interpretScore(score)}
      </p>

         {/* Show suggestion if severity is Severe */}
      {severity === "Severe depression" && (
        <div className="alert alert-danger mt-4" role="alert">
          Based on your responses, we strongly recommend consulting a licensed psychologist for professional help.
        </div>
      )}

      {/* Display psychologists if severity is Severe */}
      {severity === "Severe depression" && (
        <div className="mt-4">
          <h3>Recommended Psychologists:</h3>
          <ul className="list-group mt-3">
            {psychologists.map((psy, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>{psy.name}</h5>
                  <p>
                    <strong>Phone:</strong> <a href={`tel:${psy.phone}`}>{psy.phone}</a>
                    <br />
                    <strong>Website:</strong>{" "}
                    <a href={psy.website} target="_blank" rel="noopener noreferrer">
                      {psy.website}
                    </a>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}


      <button className="btn btn-primary btn-lg mt-4" onClick={() => changePage("welcome")}>
        Restart
      </button>
    </div>
  );
};

export default PHQ9App;
