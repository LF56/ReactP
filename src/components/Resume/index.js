// import React from 'react';
// import resume from '../../assets/images/Resume.pdf';

// function Resume (){
//     return(
//        <div>
//            <iframe src={`${resume}`}></iframe>

//        </div>
//     )
// }


// export default Resume;

import React from 'react';
import resume from '../../assets/images/Resume.pdf';
function Resume() {
    return(
        <section>
            <div className="flex justify-center h-max">
                    <iframe 
                        title="resume" 
                        src={`${resume}`}  
                        height="500" 
                        width="60%" 
                        scrolling="auto"
                        type="application/pdf"
                    />
            </div>
        </section>
    )
}

export default Resume;