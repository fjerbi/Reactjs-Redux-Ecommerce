import React from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";
function Homepage({history}) {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
}

export default Homepage;
