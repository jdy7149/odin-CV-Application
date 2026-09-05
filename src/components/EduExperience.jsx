function EduExperience({ items }) {
  return (
    <div className="saved-experience" id="saved-edu">
      <h1 className="saved-experience-title">Education Experiences</h1>

      <div className="saved-experience-list">
        {items.map(({ id, school, course, eduStartDate, eduEndDate }) => (
          <div className="saved-experience-item" key={id}>
            <form className="saved-experience-form">
              <div className="saved-field">
                <label htmlFor={`saved-school-${id}`}>School:</label>
                <input
                  type="text"
                  name="school"
                  id={`saved-school-${id}`}
                  value={school}
                  readOnly
                />
              </div>

              <div className="saved-field">
                <label htmlFor={`saved-course-${id}`}>Course:</label>
                <input
                  type="text"
                  name="course"
                  id={`saved-course-${id}`}
                  value={course}
                  readOnly
                />
              </div>

              <div className="saved-field">
                <label htmlFor={`saved-eduStartDate-${id}`}>Start Date:</label>
                <input
                  type="date"
                  name="eduStartDate"
                  id={`saved-eduStartDate-${id}`}
                  value={eduStartDate}
                  readOnly
                />
              </div>

              <div className="saved-field">
                <label htmlFor={`saved-eduEndDate-${id}`}>End Date:</label>
                <input
                  type="date"
                  name="eduEndDate"
                  id={`saved-eduEndDate-${id}`}
                  value={eduEndDate}
                  readOnly
                />
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EduExperience;
