import React, { useState } from "react";

const WordCounter = () => {
  const [text, setText] = useState("");

  const handleUpper = () => {
    let UpperCase = text.toUpperCase();
    setText(UpperCase);
  };

  const handleLower = () => {
    let lowerCase = text.toLowerCase();
    setText(lowerCase);
  };

  const handleSentense = () => {
    let SentenseCase = text
      .trim()
      .toLowerCase()
      .replace(/^./, (c) => c.toUpperCase());
    setText(SentenseCase);
  };

  const handleClear = () => {
    setText("");
  };

  const handleCopy = () => {
    let copyText = navigator.clipboard.writeText(text);
    setText(text);
  };

  const handleExtraSpace = () => {
    let extraSpace = text.trim().replace(/\s+/g, " ");
    setText(extraSpace);
  };

  const WordCount =
    text.trim() === ""
      ? 0
      : text
          .trim()
          .split(/\s+/)
          .filter((word) => word !== "").length;
  return (
    <section className="mainbody py-4 bg-white text-dark">
      <div className="container">
        <div className="row">
          <h4 className="text-start mb-3">Enter Text Here:</h4>
          <div className="col-md-8">
            <textarea
              className="form-control"
              rows="12"
              placeholder="Type or Paste your text Here..."
              value={text}
              onChange={(event) => setText(event.target.value)}
            ></textarea>
            <div className="mt-3">
              <button onClick={handleUpper} className="btn btn-primary">
                UPPERCASE
              </button>
              <button onClick={handleLower} className="btn btn-success ms-1">
                lowercase
              </button>
              <button onClick={handleSentense} className="btn btn-info ms-1">
                Sentense case
              </button>
              <button onClick={handleClear} className="btn btn-dark ms-1">
                Clear
              </button>
              <button onClick={handleCopy} className="btn btn-warning ms-1">
                Copy to Clipboard
              </button>
              <button
                onClick={handleExtraSpace}
                className="btn btn-danger ms-1"
              >
                Remove Extra Space
              </button>
            </div>
          </div>

          <div className="col-md-4">
            <ul className="list-group">
              <li className="list-group-item">
                Words: <span>{WordCount}</span>
              </li>
              <li className="list-group-item">
                Characters: <span>{text.length}</span>
              </li>
              <li className="list-group-item">
                Sentences:{" "}
                <span>
                  {
                    text
                      .split(/[.!?]+/)
                      .filter((sentence) => sentence.trim().length > 0).length
                  }
                </span>
              </li>
              <li className="list-group-item">
                Paragraphs:{" "}
                <span>
                  {text.trim() === ""
                    ? 0
                    : text
                        .trim()
                        .split(/\n\s*\n/)
                        .filter((p) => p.trim() !== "").length}
                </span>
              </li>
              <li className="list-group-item">
                Reading Time:{" "}
                <span>
                  {Math.floor((0.22 * WordCount) / 60)} min{" "}
                  {Math.round((0.22 * WordCount) % 60)} sec
                </span>
              </li>
              <li className="list-group-item">
                Speaking Time:{" "}
                <span>
                  {Math.floor((0.36 * WordCount) / 60)} min{" "}
                  {Math.round((0.36 * WordCount) % 60)} sec
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordCounter;
