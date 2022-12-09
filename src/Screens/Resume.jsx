import './Styles/Resume.css'
import ResumePDF from "../PDFS/ResumePDF.pdf"

function Resume() {

  return (
    <>
      <h1></h1>
      <a className='ResumePDF'
        href={ResumePDF}
        target="_blank" >
        Resume Link

      </a>




    </>


);
}

export default Resume;