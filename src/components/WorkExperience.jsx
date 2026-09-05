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
              <form className="saved-experience-form">
                <div className="saved-field">
                  <label htmlFor={`saved-company-${id}`}>Company:</label>
                  <input
                    type="text"
                    name="company"
                    id={`saved-company-${id}`}
                    value={company}
                    readOnly
                  />
                </div>

                <div className="saved-field">
                  <label htmlFor={`saved-position-${id}`}>Position:</label>
                  <input
                    type="text"
                    name="position"
                    id={`saved-position-${id}`}
                    value={position}
                    readOnly
                  />
                </div>

                <div className="saved-field">
                  <label htmlFor={`saved-responsibilities-${id}`}>
                    Responsibilities:
                  </label>
                  <input
                    type="text"
                    name="responsibilities"
                    id={`saved-responsibilities-${id}`}
                    value={responsibilities}
                    readOnly
                  />
                </div>

                <div className="saved-field">
                  <label htmlFor={`saved-workStartDate-${id}`}>
                    Start Date:
                  </label>
                  <input
                    type="date"
                    name="workStartDate"
                    id={`saved-workStartDate-${id}`}
                    value={workStartDate}
                    readOnly
                  />
                </div>

                <div className="saved-field">
                  <label htmlFor={`saved-workEndDate-${id}`}>End Date:</label>
                  <input
                    type="date"
                    name="workEndDate"
                    id={`saved-workEndDate-${id}`}
                    value={workEndDate}
                    readOnly
                  />
                </div>
              </form>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default WorkExperience;
