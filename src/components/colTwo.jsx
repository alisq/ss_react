import imgMap from '../img/Bhathella_Ali_Choi_DistrictAgricole-map.png'
import imgPaperProto from '../img/AAHA instagram post Nov 24 2023 2-paperproto.jpg'
import imgTour from '../img/240828 AAHA tour_8004-tour.JPG'

function ColTwo(){

  return (
     <section className="column" id="colTwo">
   <div class="column_interior">
            <div class="interior">
                    
                <h3>The Cross Canada Superstudio </h3>
                
<p>Architecture schools across Canada are coming together to simultaneously teach design studios around a shared goal: To end housing alienation. This superstudio meets a momentous pedagogical challenge: To prepare tomorrow’s designers to create housing that meaningfully contributes to improving housing for all.  </p>
<p>At the heart of the Superstudio format is the belief that there is a profound strength in numbers and that all big challenges require collaboration. It's incredibly exciting that eleven higher learning institutions are participating in this Superstudio to share knowledge, inspiration, and foster solidarity. Through the studio we will be simultaneously educating ourselves in a vast array of knowledge and technique, inventing new design methods and solutions, and building a movement for change. </p>
<img src={imgPaperProto} />
<p><strong>The Superstudio functions on two pedagogical levels</strong></p>

    <p><strong>Shared Characteristics and Tactics</strong></p>
                <ul>
    <li>All individual studio courses share a broad common theme, guiding principles, and pedagogical structure as described in this brief. </li>
    <li>We come together as a whole to both kick-off and conclude each semester. </li>
    <li>We share resources and design knowledge as it emerges. </li>
    </ul>
    


<img src={imgTour} />
      <p><strong>Studio Specific Content and Tactics </strong></p>
                
    <ul>
    <li>While adhering to our shared characteristics and tactics, each of the eleven studio courses is entirely unique to the intellectual and pedagogical aims of the faculty and institutions guiding it. </li>
    <li>Each of the eleven studios will have unique building sites, types of housing, and conceptual parameters. </li>
    <li>The Superstudio seeks to accelerate and celebrate a diversity in approaches to solving Canada’s contemporary housing challenges. </li>
    </ul>
<img src={imgMap} />
        </div>
        </div>  
    </section>
  );
};

export default ColTwo;







