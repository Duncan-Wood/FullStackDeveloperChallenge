import React, { useState, useEffect } from "react";
import raw from "../assets/corpus/hemingway.txt";

const TextViewer = ({ expanded }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(raw)
      .then((response) => response.text())
      .then((fetchedText) => {
        console.log("text fetched:", fetchedText);
        setText(fetchedText);
      })
      .catch((error) => {
        console.error("Error fetching text:", error);
      });
  }, []);

  return (
    <div className={`text-container ${expanded ? "menu-expanded" : ""}`}>
      {text}
    </div>
  );
};

export default TextViewer;