import React, { useState } from "react";

function AddVideo() {
  const [val, setVal] = useState("");

  return (
    <div class="formcontainer videoQuizContainer">
      <form id="courseForm" action="#" method="POST">
        <h1>New Video</h1>

        <div class="form-group">
          <label for="courseName">Video Title:</label>

          <input
            type="text"
            id="courseName"
            size="65"
            name="courseName"
            required
          />
        </div>

        <div class="form-group">
          <label for="endDate">Enter Video Link</label>

          <input type="text" id="endDate" name="endDate" required />
        </div>

        <div class="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddVideo;
