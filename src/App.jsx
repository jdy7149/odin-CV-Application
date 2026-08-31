import GeneralInfoForm from "./components/GeneralInfoForm"
import EduExperienceForm from "./components/EduExperienceForm"
import WorkExperienceForm from "./components/WorkExperienceForm"
import GeneralInfo from "./components/GeneralInfo"
import EduExperience from "./components/EduExperience"
import WorkExperience from "./components/WorkExperience"
import { useState } from "react"

function App() {
  const [isGeneralSubmitted, setIsGeneralSubmitted] = useState(false);
  const [isEduSubmitted, setIsEduSubmitted] = useState(false);
  const [isWorkSubmitted, setIsWorkSubmitted] = useState(false);

  let generalInfo = {};
  let eduItems = [];
  let workItems = [];

  // Parse data of input tags' value in 'className' forms within 'idName' div
  function parseFormData(idName, className) {
    return Array.from(document.querySelectorAll(`#${idName} .${className}`))
      .map((formElem) => Object.entries(new FormData(formElem).entries()));
  }

  function onGeneralSubmit() {
    generalInfo = new FormData(document.querySelector('#general'));

    setIsGeneralSubmitted(true);
  }

  function onEduSubmit() {
    eduItems = parseFormData('edu', 'edu-sector');

    setIsEduSubmitted(true);
  }

  function onWorkSubmit() {
    workItems = parseFormData('work', 'work-sector');

    setIsWorkSubmitted(true);
  }

  return (
    <>
    <div>
      <h1>CV-Applicatioon</h1>
    </div>
    <div>
      <GeneralInfoForm info={} isSubmitted={isGeneralSubmitted} onSubmit={onGeneralSubmit}/>
      <EduExperienceForm isSubmitted={isEduSubmitted} onSubmit={onEduSubmit}/>
      <WorkExperienceForm isSubmitted={isWorkSubmitted} onSubmit={onWorkSubmit} />
    </div>
    <div>
      <GeneralInfo info={generalInfo} />
      <EduExperience items={eduItems} />
      <WorkExperience items={workItems} />
    </div>
    </>
  )
}

export default App
