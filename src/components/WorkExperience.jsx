function WorkExperience({ items }) {
  return (
    <div>
      <h1>Work Experiences</h1>
      {items.map(({ company, position, responsibilities, workStartDate, workEndDate }) => {
        <div>
          <p>Company: {company}</p>
          <p>Position: {position}</p>
          <p>Responsibilities: {responsibilities}</p>
          <p>Start Date: {workStartDate}</p>
          <p>End Date: {workEndDate}</p>
        </div>
      })}
    </div>
  )
}

export default WorkExperience;