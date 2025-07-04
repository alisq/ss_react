import imgPostIt from '../img/AAHA instagram post Oct 3 2023 1-post its.jpg'
import imgPavillion from '../img/AAHA instagram post Nov 24 2023 1-pavillion.jpg'
import imgMeeting from '../img/AAHA instagram post Feb 3 2025 3 - vince.JPG'

function ColThree(){

  return (
     <section className="column" id="colThree">
     <div class="column_interior">
            <div class="interior">
                     





             <h3>Shared Principles</h3>
                     <img src={imgPostIt} />
  <ol>
    <li><strong>Indigenous solidarity:</strong> Whether these studios focus directly on Indigenous housing issues in direct collaboration with Indigenous partners, or whether they focus exclusively on urban housing issues for a diverse population, all studios will acknowledge Indigenous land relations and the effects of colonization within the studio.</li>
    <li><strong>Housing decommodification:</strong> The housing problem in Canada is a result of the rapid increase in the cost of land caused by the assetization of land and housing. These studios will explore decommodified approaches to housing.</li>
    <li><strong>Wholistic quality:</strong> The housing problem is often addressed quantitatively, as either a question of supply or price-point, but housing alienation is a qualitative issue. Housing needs to be better designed to connect inhabitants to their surrounding natural ecology, community of family and friends and neighbours, and sense of creative agency.</li>
    <li><strong>Collaboration:</strong> Housing is part of a complex system, with many participants. Architects have a deep understanding of the qualitative dimensions of home, but they don't have the training to navigate the policy landscape, diverse lived experience, and social struggles that shape the housing problem, so they need to address these issues with collaborators with other forms of expertise and within an ethical framework.</li>
<img src={imgMeeting} />
  </ol>

  <h3>Shared Structures</h3>
  <ul>
   
    <li><strong>Collaboration with non-architectural partners:</strong> Studios will collaborate with non-architects, with direct knowledge and familiarity with community needs (for example: working with a local land trust, community group, First Nation, or directly with a community). </li>
    <li><strong>A broad set of shared protocols for partner engagement</strong> (we are looking for an existing set of protocols which are broad enough to address the range of potential collaborations and look for input from all participating schools—the Design Justice Network’s principles seem a good possibility: https://designjustice.org/read-the-principles)  </li>
    <img src={imgPavillion} />

    <li><strong>One or more demands to end housing alienation in Canada.</strong> Each studio is organized around a ‘demand.’ These can be existing demands within Architects Against Housing Alienation's manifesto (1-10), or it can be entirely new demand. Demands aspire to things that do not currently exist, but which are realizable in specific places, and are supported by local residents and organizations.   </li>
    <li><strong>Common online workshops and reviews with paired schools</strong> using virtual tools like MIRO and Zoom, amongst studios clustered based on shared studio subjects or demands. </li>
    <li><strong>Website Exhibition of Studio Work</strong> All student projects will be displayed on a designated Superstudio website. The virtual exhibition’s launch will coincide with the End-of-Term Webinar. </li>
  </ul>

  <h3>Shared Schedule</h3>
  <ul>
    <li><strong>Super Studio Kick-Off Webinar:</strong><br />
      Saturday, September 06, 2025<br />
      10:00am - 1:00pm PT, 1:00-4:00pm ET
    </li>
    <li><strong>Demand Groupings Studio Mid-Reviews:</strong><br />
      Specific Dates TBD by Studio Groupings
    </li>
    <li><strong>Super Studio End-of-Term Webinar & Celebration:</strong><br />
      Saturday, December 06, 2025<br />
      10:00am - 1:00pm PT, 1:00-4:00pm ET
    </li>
  </ul>

 
  </div>
  </div>
    
    </section>
  );
};

export default ColThree;







