import { useState } from "react";

import parseFormData from "../utils/parseFormData";

function WorkExperienceForm({
  isSubmitted,
  savedWorkItems,
  saveWorkItems,
  onEdit,
}) {
  const [workItems, setWorkItems] = useState(savedWorkItems);

  function addItem() {
    const currentItems = parseFormData("work", "work-form");

    setWorkItems([
      {
        id: crypto.randomUUID(),
        company: "",
        position: "",
        responsibilities: "",
        workStart: "",
        workEnd: "",
      },
      ...currentItems,
    ]);
  }

  function deleteItem(id) {
    const currentItems = parseFormData("work", "work-form");

    setWorkItems(currentItems.filter((item) => item.id !== id));
  }

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
              <input type="hidden" name="id" value={id} readOnly />

              <label htmlFor={`company-${id}`}>Company</label>
              <input
                type="text"
                name="company"
                id={`company-${id}`}
                required
                value={company}
                readOnly={isSubmitted}
              />

              <label htmlFor={`position-${id}`}>Position</label>
              <input
                type="text"
                name="position"
                id={`position-${id}`}
                required
                value={position}
                readOnly={isSubmitted}
              />

              <label htmlFor={`responsibilities-${id}`}>Responsibilities</label>
              <input
                type="text"
                name="responsibilities"
                id={`responsibilities-${id}`}
                value={responsibilities}
                readOnly={isSubmitted}
              />

              <label htmlFor={`workStartDate-${id}`}>Start Date</label>
              <input
                type="date"
                name="workStartDate"
                id={`workStartDate-${id}`}
                required
                value={workStartDate}
                readOnly={isSubmitted}
              />

              <label htmlFor={`workEndDate-${id}`}>End Date</label>
              <input
                type="date"
                name="workEndDate"
                id={`workEndDate-${id}`}
                value={workEndDate}
                readOnly={isSubmitted}
              />

              {!isSubmitted && (
                <button type="button" onClick={() => deleteItem(id)}>
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
            <button type="button" onClick={addItem}>
              Add
            </button>

            <button
              type="submit"
              onClick={() =>
                saveWorkItems(
                  parseFormData("work", "work-form").filter(
                    ({ company, position, workStart }) =>
                      company || position || workStart,
                  ),
                )
              }
            >
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default WorkExperienceForm;
