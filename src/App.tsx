import styles from './App.module.css'
import {
  ResumeLayout,
  ResumeHeader,
  ResumeAbout,
  ResumeContact,
  ResumeCourses,
  ResumeProjects,
  ResumeSoftSkills,
  ResumeTechnologies,
  ResumeWorks,
} from 'react-resume-kit'
import 'react-resume-kit/style.css'

import {content} from './data/content'

function App() {
  return (
    <div>
      <div className={styles.frame}>
        <ResumeLayout
          resumeContent={content}
          enableLanguageSwitch
          enablePdfDownload
          initialLanguage="es"
        >
          <ResumeHeader />
          <ResumeAbout />
          <ResumeWorks />
          <ResumeCourses />
          <ResumeTechnologies />
          <ResumeSoftSkills />
          <ResumeProjects />
          <ResumeContact />
        </ResumeLayout>
      </div>
      <div className={styles.background} />
    </div>
  )
}

export default App
