function WorkExperienceForm({ items }) {
  return (
    <div>
      <h1>Work Experience</h1>
      {items.map(({ company, position, responsibilities, workStartDate, workEndDate }) => {
        <div>
          <label htmlFor="company">Company</label>
          <input type="text" name="company" id="company" value={company}/>
          <label htmlFor="position">Position</label>
          <input type="text" name="position" id="position" value={position} />
          <label htmlFor="resposibilities">Resposibilities</label>
          <input type="text" name="resposibilities" id="resposibilities" value={responsibilities} />
          <label htmlFor="workStart">Start Date</label>
          <input type="date" name="workStart" id="workStart" value={workStartDate} />
          <label htmlFor="workEnd">End Date</label>
          <input type="date" name="workEnd" id="workEnd" value={workEndDate} />
          <button type="button">Delete</button>
        </div>
      })}
      <button type="button">Add</button>
      <button type="button">Submit</button>
    </div>
  )
}

export default WorkExperienceForm;