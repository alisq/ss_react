import parse from 'html-react-parser';

function Studio({title, desc, school, teacher, demands, isOpen, onClick}) {
    //   const [isOpen, setIsOpen] = useState(false);

    return (
        <li className={`studio ${isOpen ? "open" : ""}`}>
            

                              <div className='studio_header' onClick={onClick}>
                            <h4><span className='triangle'>&#9656;</span> {title}</h4>
                            <h5>{school}</h5>
                        </div>
                        <div className='studio_body'>

                            {Array.isArray(demands) && demands.length > 0 && (
                            <h6>
                                <label>demands:</label> <em>{demands.join(", ")}</em>
                            </h6>
                            )}

                            <h6><label>instructor(s):</label> <strong>{teacher}</strong></h6>
                            {parse(desc)}
                            
                        </div>
 
        </li>
    )
}

export default Studio;