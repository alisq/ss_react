import {useState}  from "react";

function Studio({title, desc, school, teacher, demands, isOpen, onClick}) {
    //   const [isOpen, setIsOpen] = useState(false);

    return (
        <li className={`studio ${isOpen ? "open" : ""}`}>
            

                              <div className='studio_header' onClick={onClick}>
                            <h4><span class='triangle'>&#9656;</span> {title}</h4>
                            <h5>{school}</h5>
                        </div>
                        <div className='studio_body'>

                            {Array.isArray(demands) && demands.length > 0 && (
                            <h6>
                                <label>demands:</label> <em>{demands.join(", ")}</em>
                            </h6>
                            )}

                            <h6><label>instructor(s):</label> <strong>{teacher}</strong></h6>
                            <p>{desc}</p>
                            
                        </div>
 
        </li>
    )
}

export default Studio;