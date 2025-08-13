import Studio from './studio'
import studios from '../data/studios.json';
import { useState } from "react";


function ColThree(){
   const [openIndex, setOpenIndex] = useState(null);

  return (
     <section className="column" id="colThree">
     <div className="column_interior">
       <div className="column_header">
                  <h2><div className="date_title">September 2025-<br />May 2026</div><br />a cross-Canada<br /> architecture <br />
superstudio</h2>
              </div>
            <div className="interior">
                    <h3 className="sticky">Participating Studios</h3>
                    <ul className="studios">
                      {studios.map((item, index) => (
                        <div key={index}>
                            <Studio 
                              isOpen={openIndex === index}
                              onClick={() => setOpenIndex(openIndex === index ? null : index)} 
                              title={item.title} 
                              desc={item.desc} 
                              school={item.school} 
                              demands={item.demands} 
                              teacher={item.teacher} />
                        </div> 
                    ))}
                   
                      </ul>



  </div>
  </div>
    
    </section>
  );
};

export default ColThree;







