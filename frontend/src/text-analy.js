import React, { useState } from "react";

export const TextAna = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null); // To store the result from the AI model
  const [loading, setLoading] = useState(false); // To handle the loading state
  const [error, setError] = useState(null); // To handle errors

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("http://localhost:5987/Depression_Analysis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ form10: text }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch results. Please try again.");
      }

      const data = await response.json();
      setResult(data.result); // Assume the response has a `result` field
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-8 col-sm-8">
            <div className="md-form">
              <h5>Write something about how you feel.</h5>
              <textarea
                required
                id="form10"
                name="form10"
                className="md-textarea form-control"
                rows="3"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-sm-12">
            <br />
            <button className="btn btn-primary" type="submit" disabled={loading}>
              {loading ? "Processing..." : "See Result"}
            </button>
          </div>
        </div>
      </form>

      {/* Display Result */}
      {result && (
        <div className="result mt-4">
          <h5>Analysis Result:</h5>
          <p>{result}</p>
        </div>
      )}

      {/* Display Error */}
      {error && (
        <div className="error mt-4 text-danger">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default TextAna;
