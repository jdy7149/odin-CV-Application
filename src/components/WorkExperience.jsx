function WorkExperience({ items }) {
  return (
    <div>
      <h1>Work Experiences</h1>

      {items.map(
        (
          { company, position, responsibilities, workStartDate, workEndDate },
          i,
        ) => (
          <div key={i}>
            <form className="saved-work-form">
              <div>
                <label htmlFor={`saved-company-${i}`}>Company: </label>
                <input
                  type="text"
                  name="company"
                  id={`saved-company-${i}`}
                  value={company}
                />
              </div>

              <div>
                <label htmlFor={`saved-position-${i}`}>Position: </label>
                <input
                  type="text"
                  name="position"
                  id={`saved-position-${i}`}
                  value={position}
                />
              </div>

              <div>
                <label htmlFor={`saved-responsibilities-${i}`}>
                  Responsibilities:{" "}
                </label>
                <input
                  type="text"
                  name="responsibilities"
                  id={`saved-responsibilities-${i}`}
                  value={responsibilities}
                />
              </div>

              <div>
                <label htmlFor={`saved-workStartDate-${i}`}>Start Date: </label>
                <input
                  type="date"
                  name="workStartDate"
                  id={`saved-workStartDate-${i}`}
                  value={workStartDate}
                />
              </div>

              <div>
                <label htmlFor={`saved-workEndDate-${i}`}>End Date: </label>
                <input
                  type="date"
                  name="workEndDate"
                  id={`saved-workEndDate-${i}`}
                  value={workEndDate}
                />
              </div>
            </form>
          </div>
        ),
      )}
    </div>
  );
}

export default WorkExperience;
