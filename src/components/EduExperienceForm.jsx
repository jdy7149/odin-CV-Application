function EduExperienceForm({ items }) {
  return (
    <div>
      <h1>Education Experience</h1>
      {items.map(({ school, course, eduStartDate, eduEndDate }) => {
        <div>
          <label htmlFor="school">Shcool</label>
          <input type="text" name="school" id="school" value={school}/>
          <label htmlFor="course">Course</label>
          <input type="text" name="course" id="course" value={course} />
          <label htmlFor="eduStart">Start Date</label>
          <input type="date" name="eduStart" id="eduStart" value={eduStartDate} />
          <label htmlFor="eduEnd">End Date</label>
          <input type="date" name="eduEnd" id="eduEnd" value={eduEndDate} />
          <button type="button">Delete</button>
        </div>
      })}
      <button type="button">Add</button>
      <button type="button">Submit</button>
    </div>
  )
}

export default EduExperienceForm;