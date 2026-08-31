function EduExperience({ items }) {
  return (
    <div>
      <h1>Education Experiences</h1>
      {items.map(({ school, course, eduStartDate, eduEndDate }) => {
        <div>
          <p>School: {school}</p>
          <p>Course: {course}</p>
          <p>Start Date: {eduStartDate}</p>
          <p>End Date: {eduEndDate}</p>
        </div>
      })}
    </div>
  )
}

export default EduExperience;