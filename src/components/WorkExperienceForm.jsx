import { useState } from "react";

function WorkExperienceForm({ isSubmitted, savedWorkItems, onSubmit, onEdit }) {
  const [workItems, setWorkItems] = useState(savedWorkItems);

  return (
    <div id="work">
      <h1>Work Experience</h1>

      {workItems.map(
        ({
          id,
          company,
          position,
          responsibilities,
          workStartDate,
          workEndDate,
        }) => (
          <div key={id}>
            <form className="work-form">
              <label htmlFor={`company-${id}`}>Company</label>
              <input
                type="text"
                name="company"
                id={`company-${id}`}
                value={company}
              />

              <label htmlFor={`position-${id}`}>Position</label>
              <input
                type="text"
                name="position"
                id={`position-${id}`}
                value={position}
              />

              <label htmlFor={`responsibilities-${id}`}>Responsibilities</label>
              <input
                type="text"
                name="responsibilities"
                id={`responsibilities-${id}`}
                value={responsibilities}
              />

              <label htmlFor={`workStart-${id}`}>Start Date</label>
              <input
                type="date"
                name="workStart"
                id={`workStart-${id}`}
                value={workStartDate}
              />

              <label htmlFor={`workEnd-${id}`}>End Date</label>
              <input
                type="date"
                name="workEnd"
                id={`workEnd-${id}`}
                value={workEndDate}
              />

              {!isSubmitted && (
                <button
                  type="button"
                  onClick={() =>
                    setWorkItems(workItems.filter((item) => item.id !== id))
                  }
                >
                  Delete
                </button>
              )}
            </form>
          </div>
        ),
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
              onClick={() =>
                setWorkItems([{ id: crypto.randomUUID() }, ...workItems])
              }
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
