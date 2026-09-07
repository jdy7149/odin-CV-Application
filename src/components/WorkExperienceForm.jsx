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
    const currentItems = parseFormData("work", "experience-item");

    setWorkItems([
      ...currentItems,
      {
        id: crypto.randomUUID(),
        company: "",
        position: "",
        responsibilities: "",
        workStartDate: "",
        workEndDate: "",
      },
    ]);
  }

  function deleteItem(id) {
    const currentItems = parseFormData("work", "experience-item");

    setWorkItems(currentItems.filter((item) => item.id !== id));
  }

  function submitItems(event) {
    event.preventDefault();

    const items = parseFormData("work", "experience-item").filter(
      ({ company, position, workStartDate }) =>
        company || position || workStartDate,
    );

    saveWorkItems(items);
    setWorkItems(items);
  }

  return (
    <div id="work" className="form-section experience-section">
      <form className="form work-experience-form" onSubmit={submitItems}>
        <h1 className="form-title">Work Experience</h1>

        <div className="experience-list">
          {workItems.map(
            ({
              id,
              company,
              position,
              responsibilities,
              workStartDate,
              workEndDate,
            }) => (
              <div className="experience-item" key={id}>
                <input
                  className="form-id"
                  type="hidden"
                  name="id"
                  value={id}
                  readOnly
                />

                <div className="form-field">
                  <label htmlFor={`company-${id}`}>Company</label>
                  <input
                    type="text"
                    name="company"
                    id={`company-${id}`}
                    defaultValue={company}
                    required
                    readOnly={isSubmitted}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor={`position-${id}`}>Position</label>
                  <input
                    type="text"
                    name="position"
                    id={`position-${id}`}
                    defaultValue={position}
                    required
                    readOnly={isSubmitted}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor={`responsibilities-${id}`}>
                    Responsibilities
                  </label>
                  <input
                    type="text"
                    name="responsibilities"
                    id={`responsibilities-${id}`}
                    defaultValue={responsibilities}
                    readOnly={isSubmitted}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor={`workStartDate-${id}`}>Start Date</label>
                  <input
                    type="date"
                    name="workStartDate"
                    id={`workStartDate-${id}`}
                    defaultValue={workStartDate}
                    required
                    readOnly={isSubmitted}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor={`workEndDate-${id}`}>End Date</label>
                  <input
                    type="date"
                    name="workEndDate"
                    id={`workEndDate-${id}`}
                    defaultValue={workEndDate}
                    readOnly={isSubmitted}
                  />
                </div>

                {!isSubmitted && (
                  <div className="item-actions">
                    <button
                      className="button button-delete"
                      type="button"
                      onClick={() => deleteItem(id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ),
          )}
        </div>

        <div className="form-actions">
          {isSubmitted ? (
            <button
              className="button button-edit"
              type="button"
              onClick={onEdit}
            >
              Edit
            </button>
          ) : (
            <>
              <button
                className="button button-add"
                type="button"
                onClick={addItem}
              >
                Add
              </button>

              <button className="button button-submit" type="submit">
                Submit
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}

export default WorkExperienceForm;
