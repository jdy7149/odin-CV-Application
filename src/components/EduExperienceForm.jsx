import { useState } from "react";

import parseFormData from "../utils/parseFormData";

function EduExperienceForm({
  isSubmitted,
  savedEduItems,
  saveEduItems,
  onEdit,
}) {
  const [eduItems, setEduItems] = useState(savedEduItems);

  function addItem() {
    const currentItems = parseFormData("edu", "experience-item");

    setEduItems([
      ...currentItems,
      {
        id: crypto.randomUUID(),
        school: "",
        course: "",
        eduStartDate: "",
        eduEndDate: "",
      },
    ]);
  }

  function deleteItem(id) {
    const currentItems = parseFormData("edu", "experience-item");

    setEduItems(currentItems.filter((item) => item.id !== id));
  }

  function submitItems(event) {
    event.preventDefault();

    const items = parseFormData("edu", "experience-item").filter(
      ({ school, course, eduStartDate }) => school && course && eduStartDate,
    );

    if (items.length === 0) {
      items.push({
        id: crypto.randomUUID(),
        school: "",
        course: "",
        eduStartDate: "",
        eduEndDate: "",
      });
    }

    saveEduItems(items);
    setEduItems(items);
  }

  return (
    <div id="edu" className="form-section experience-section">
      <form className="form education-form" onSubmit={submitItems}>
        <h1 className="form-title">Education Experience</h1>

        <div className="experience-list">
          {eduItems.map(({ id, school, course, eduStartDate, eduEndDate }) => (
            <div className="experience-item" key={id}>
              <input
                className="form-id"
                type="hidden"
                name="id"
                value={id}
                readOnly
              />

              <div className="form-field">
                <label htmlFor={`school-${id}`}>School</label>
                <input
                  type="text"
                  name="school"
                  id={`school-${id}`}
                  defaultValue={school}
                  required
                  readOnly={isSubmitted}
                />
              </div>

              <div className="form-field">
                <label htmlFor={`course-${id}`}>Course</label>
                <input
                  type="text"
                  name="course"
                  id={`course-${id}`}
                  defaultValue={course}
                  required
                  readOnly={isSubmitted}
                />
              </div>

              <div className="form-field">
                <label htmlFor={`eduStartDate-${id}`}>Start Date</label>
                <input
                  type="date"
                  name="eduStartDate"
                  id={`eduStartDate-${id}`}
                  defaultValue={eduStartDate}
                  required
                  readOnly={isSubmitted}
                />
              </div>

              <div className="form-field">
                <label htmlFor={`eduEndDate-${id}`}>End Date</label>
                <input
                  type="date"
                  name="eduEndDate"
                  id={`eduEndDate-${id}`}
                  defaultValue={eduEndDate}
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
          ))}
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

export default EduExperienceForm;
