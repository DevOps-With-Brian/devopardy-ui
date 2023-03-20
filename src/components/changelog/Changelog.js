import React, { useState, useEffect } from "react";
import { marked } from "marked";

const Changelog = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const fetchChangelog = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/DevOps-With-Brian/devopardy-ui/main/CHANGELOG.md"
      );
      const text = await response.text();
      setMarkdown(text);
    };

    fetchChangelog();
  }, []);

  const createMarkup = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div className="main-container">
      <div className="container">
        <div
          className="changelog-container"
          dangerouslySetInnerHTML={createMarkup()}
        ></div>
      </div>
    </div>
  );
};

export default Changelog;
