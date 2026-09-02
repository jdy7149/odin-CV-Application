import { useState } from "react";

function WorkExperienceForm({ isSubmitted, onSubmit, onEdit }) {
  const [workInfo, setWorkInfo] = useState([]);

  return (
    <div id="work">
      <h1>Work Experience</h1>
      {workInfo.map(
        (
          { company, position, responsibilities, workStartDate, workEndDate },
          i,
        ) => {
          <div>
            <form className="work-form">
              <label htmlFor={"company-" + i}>Company</label>
              <input
                type="text"
                name="company"
                id={"company-" + i}
                value={company}
              />
              <label htmlFor={"position-" + i}>Position</label>
              <input
                type="text"
                name="position"
                id={"position-" + i}
                value={position}
              />
              <label htmlFor={"resposibilities-" + i}>Resposibilities</label>
              <input
                type="text"
                name="resposibilities"
                id={"resposibilities-" + i}
                value={responsibilities}
              />
              <label htmlFor={"workStart-" + i}>Start Date</label>
              <input
                type="date"
                name="workStart"
                id={"workStart-" + i}
                value={workStartDate}
              />
              <label htmlFor={"workEnd-" + i}>End Date</label>
              <input
                type="date"
                name="workEnd"
                id={"workEnd-" + i}
                value={workEndDate}
              />
              <button type="button">Delete</button>
            </form>
          </div>;
        },
      )}
      <div>
        {isSubmitted ? (
          <button type="button" onClick={onEdit}>
            Edit
          </button>
        ) : (
          <>
            <button
              type="button"
              onClick={setWorkInfo([...workInfo, { id: crypto.randomUUID }])}
            >
              Add
            </button>
            <button type="submit" onClick={onSubmit}>
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default WorkExperienceForm;
