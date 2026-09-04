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
    const currentItems = parseFormData("edu", "edu-form");

    setEduItems([
      {
        id: crypto.randomUUID(),
        school: "",
        course: "",
        eduStartDate: "",
        eduEndDate: "",
      },
      ...currentItems,
    ]);
  }

  function deleteItem(id) {
    const currentItems = parseFormData("edu", "edu-form");

    setEduItems(currentItems.filter((item) => item.id !== id));
  }

  function submitItems() {
    saveEduItems(
      parseFormData("edu", "edu-form").filter(
        ({ school, course, eduStartDate }) => school || course || eduStartDate,
      ),
    );
  }

  return (
    <div id="edu">
      <h1>Education Experience</h1>

      {eduItems.map(({ id, school, course, eduStartDate, eduEndDate }) => (
        <div key={id}>
          <form className="edu-form">
            <input type="hidden" name="id" value={id} readOnly />

            <label htmlFor={`school-${id}`}>School</label>
            <input
              type="text"
              name="school"
              id={`school-${id}`}
              value={school}
              required
              readOnly={isSubmitted}
            />

            <label htmlFor={`course-${id}`}>Course</label>
            <input
              type="text"
              name="course"
              id={`course-${id}`}
              value={course}
              required
              readOnly={isSubmitted}
            />

            <label htmlFor={`eduStartDate-${id}`}>Start Date</label>
            <input
              type="date"
              name="eduStartDate"
              id={`eduStartDate-${id}`}
              value={eduStartDate}
              required
              readOnly={isSubmitted}
            />

            <label htmlFor={`eduEndDate-${id}`}>End Date</label>
            <input
              type="date"
              name="eduEndDate"
              id={`eduEndDate-${id}`}
              value={eduEndDate}
              readOnly={isSubmitted}
            />

            {!isSubmitted && (
              <button type="button" onClick={() => deleteItem(id)}>
                Delete
              </button>
            )}
          </form>
        </div>
      ))}

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

            <button type="button" onClick={submitItems}>
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default EduExperienceForm;
