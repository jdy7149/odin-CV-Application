import { useState } from "react";

function EduExperienceForm({ isSubmitted, savedEduItems, onSubmit, onEdit }) {
  const [eduItems, setEduItems] = useState(savedEduItems);

  function onDelete(id) {
    setEduItems((items) => items.filter((item) => item.id !== id));
  }

  function onAdd() {
    setEduItems((items) => [
      {
        id: crypto.randomUUID(),
        school: "",
        course: "",
        eduStartDate: "",
        eduEndDate: "",
      },
      ...items,
    ]);
  }

  return (
    <div id="edu">
      <h1>Education Experience</h1>

      {eduItems.map(({ id, school, course, eduStartDate, eduEndDate }) => (
        <div key={id}>
          <form className="edu-form">
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

            <label htmlFor={`eduStart-${id}`}>Start Date</label>
            <input
              type="date"
              name="eduStart"
              id={`eduStart-${id}`}
              value={eduStartDate}
              required
              readOnly={isSubmitted}
            />

            <label htmlFor={`eduEnd-${id}`}>End Date</label>
            <input
              type="date"
              name="eduEnd"
              id={`eduEnd-${id}`}
              value={eduEndDate}
              readOnly={isSubmitted}
            />

            <div>
              {!isSubmitted && (
                <button type="button" onClick={() => onDelete(id)}>
                  Delete
                </button>
              )}
            </div>
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
            <button type="button" onClick={onAdd}>
              Add
            </button>

            <button type="button" onClick={onSubmit}>
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default EduExperienceForm;
