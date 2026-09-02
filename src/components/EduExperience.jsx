function EduExperience({ items }) {
  return (
    <div>
      <h1>Education Experiences</h1>

      {items.map(({ school, course, eduStartDate, eduEndDate }, i) => (
        <div key={i}>
          <form className="saved-edu-form">
            <div>
              <label htmlFor={`saved-school-${i}`}>School: </label>
              <input
                type="text"
                name="school"
                id={`saved-school-${i}`}
                value={school}
                readOnly
              />
            </div>

            <div>
              <label htmlFor={`saved-course-${i}`}>Course: </label>
              <input
                type="text"
                name="course"
                id={`saved-course-${i}`}
                value={course}
                readOnly
              />
            </div>

            <div>
              <label htmlFor={`saved-eduStartDate-${i}`}>Start Date: </label>
              <input
                type="date"
                name="eduStartDate"
                id={`saved-eduStartDate-${i}`}
                value={eduStartDate}
                readOnly
              />
            </div>

            <div>
              <label htmlFor={`saved-eduEndDate-${i}`}>End Date: </label>
              <input
                type="date"
                name="eduEndDate"
                id={`saved-eduEndDate-${i}`}
                value={eduEndDate}
                readOnly
              />
            </div>
          </form>
        </div>
      ))}
    </div>
  );
}

export default EduExperience;
