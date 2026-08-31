import { useState } from "react";

function EduExperienceForm({ isSubmitted, onSubmit, onEdit }) {
  const [eduInfo, setEduInfo] = useState([]);

  return (
    <form action="">
      <div>
        <h1>Education Experience</h1>
        {eduInfo.map(({ school, course, eduStartDate, eduEndDate }) => {
          <div>
            <label htmlFor="school">Shcool</label>
            <input type="text" name="school" id="school" value={school} required readOnly={isSubmitted}/>
            <label htmlFor="course">Course</label>
            <input type="text" name="course" id="course" value={course} required readOnly={isSubmitted} />
            <label htmlFor="eduStart">Start Date</label>
            <input type="date" name="eduStart" id="eduStart" value={eduStartDate} required readOnly={isSubmitted} />
            <label htmlFor="eduEnd">End Date</label>
            <input type="date" name="eduEnd" id="eduEnd" value={eduEndDate} readOnly={isSubmitted} />
            <div>
              {!isSubmitted && <button type="button">Delete</button>} 
            </div>
          </div>
        })}
        <div>
          {isSubmitted ? (
            <button type="button" onClick={onEdit}>Edit</button>
          ) : (
            <>
              <button type="button" onClick={setEduInfo([...eduInfo, {id:crypto.randomUUID()}])}>Add</button>
              <button type="submit" onClick={onSubmit}>Submit</button>
            </>
          )}
        </div>
      </div>
    </form>
  )
}

export default EduExperienceForm;