import ModalImage from "react-modal-image";

import imgMap from '../img/Bhathella_Ali_Choi_DistrictAgricole-map.png'
import imgPaperProto from '../img/AAHA instagram post Nov 24 2023 2-paperproto.jpg'
import imgTour from '../img/240828 AAHA tour_8004-tour.JPG'

import smallImgMap from '../img/small/Bhathella_Ali_Choi_DistrictAgricole-map.png'
import smallImgPaperProto from '../img/small/AAHA instagram post Nov 24 2023 2-paperproto.jpg'
import smallImgTour from '../img/small/240828 AAHA tour_8004-tour.JPG'

function ColTwo(){

  return (
     <section className="column" id="colTwo">
   <div className="column_interior">
     <div className="column_header">
                <h1>END HOUSING<br />ALIENATION<br />NOW!</h1>
              </div>
            <div className="interior">
                    <div className="section" id="cross_canada_superstudio">
                <h3 className="sticky">The Cross Canada Superstudio </h3>
                
<p>Architecture schools across Canada are coming together to simultaneously teach design studios around a shared goal: To end housing alienation. This superstudio meets a momentous pedagogical challenge: To prepare tomorrow’s designers to create housing that meaningfully contributes to improving housing for all.  </p>
<p>At the heart of the Superstudio format is the belief that there is a profound strength in numbers and that all big challenges require collaboration. It's incredibly exciting that twelve higher learning institutions are participating in this Superstudio to share knowledge, inspiration, and foster solidarity. Through the studio we will be simultaneously educating ourselves in a vast array of knowledge and technique, inventing new design methods and solutions, and building a movement for change. </p>
<ModalImage small={smallImgPaperProto} large={imgPaperProto} alt="hands playing over a printed outline of a building" />
<p><strong>The Superstudio functions on two pedagogical levels</strong></p>

    <p><strong>Shared Characteristics and Tactics</strong></p>
                <ul>
    <li>All individual studio courses share a broad common theme, guiding principles, and pedagogical structure as described in this brief. </li>
    <li>We come together as a whole to both kick-off and conclude each semester. </li>
    <li>We share resources and design knowledge as it emerges. </li>
    </ul>
    


<ModalImage small={smallImgTour} large={imgTour} alt="students being led on a guided architectural tour, the teacher/guide is facing the camera in the background" />
      <p><strong>Studio Specific Content and Tactics </strong></p>
                
    <ul>
    <li>While adhering to our shared characteristics and tactics, each of the eleven studio courses is entirely unique to the intellectual and pedagogical aims of the faculty and institutions guiding it. </li>
    <li>Each of the eleven studios will have unique building sites, types of housing, and conceptual parameters. </li>
    <li>The Superstudio seeks to accelerate and celebrate a diversity in approaches to solving Canada’s contemporary housing challenges. </li>
    </ul>
<ModalImage small={smallImgMap} large={imgMap} alt="a proposed map of housing in downtown Halifax" />
        </div>
        </div>
        </div>  
    </section>
  );
};

export default ColTwo;







