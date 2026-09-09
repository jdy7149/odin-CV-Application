function EduExperience({ items }) {
  return (
    <div className="saved-experience" id="saved-edu">
      <h1 className="saved-experience-title">Education Experiences</h1>

      <div className="saved-experience-list">
        {items.map(
          ({ id, school, course, eduStartDate, eduEndDate }) => (
            <div className="saved-experience-item" key={id}>
              <div className="saved-experience-form">
                <div className="saved-field">
                  <span className="saved-field-label">School:</span>
                  <span className="saved-field-value">{school}</span>
                </div>

                <div className="saved-field">
                  <span className="saved-field-label">Course:</span>
                  <span className="saved-field-value">{course}</span>
                </div>

                <div className="saved-field">
                  <span className="saved-field-label">Start Date:</span>
                  <span className="saved-field-value">
                    {eduStartDate}
                  </span>
                </div>

                <div className="saved-field">
                  <span className="saved-field-label">End Date:</span>
                  <span className="saved-field-value">
                    {eduEndDate}
                  </span>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default EduExperience;

