function WorkExperience({ items }) {
  return (
    <div className="saved-experience" id="saved-work">
      <h1 className="saved-experience-title">Work Experiences</h1>

      <div className="saved-experience-list">
        {items.map(
          ({
            id,
            company,
            position,
            responsibilities,
            workStartDate,
            workEndDate,
          }) => (
            <div className="saved-experience-item" key={id}>
              <div className="saved-experience-form">
                <div className="saved-field">
                  <span className="saved-field-label">Company:</span>
                  <span className="saved-field-value">{company}</span>
                </div>

                <div className="saved-field">
                  <span className="saved-field-label">Position:</span>
                  <span className="saved-field-value">{position}</span>
                </div>

                <div className="saved-field">
                  <span className="saved-field-label">
                    Responsibilities:
                  </span>
                  <span className="saved-field-value">
                    {responsibilities}
                  </span>
                </div>

                <div className="saved-field">
                  <span className="saved-field-label">Start Date:</span>
                  <span className="saved-field-value">
                    {workStartDate}
                  </span>
                </div>

                <div className="saved-field">
                  <span className="saved-field-label">End Date:</span>
                  <span className="saved-field-value">
                    {workEndDate}
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

export default WorkExperience;

