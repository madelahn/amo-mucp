import './App.css';
import SidebarNavItem from './nav';
import Scroll from './scroll';

function App() { 
  const headings = [
    { id: 'intro', label: 'Introduction' },
    { id: 'goals', label: 'Goals' },
    { id: 'process', label: 'Process Work', children: [
      { id: 'briefing-note', label: 'Briefing Notes'},
      { id: 'website', label: 'Website'}
    ] },
    { id: 'takeaway', label: 'Takeaway' },
  ];
  
  const flatIds = headings.flatMap((h) =>
    h.children ? [h.id, ...h.children.map((c) => c.id)] : [h.id]
  );
  const activeId = Scroll(flatIds);

  return (
    <div className="App">
    <nav>
      <div className="nav-header">Sections</div>
      <ul>
        {headings.map((item) => (
          <SidebarNavItem
            key={item.id}
            {...item}
            activeId={activeId}
          />
        ))}
      </ul>
    </nav>

      <header className="App-header">
        <p>Madeline Ahn</p>
        <p>URB431Y1: MUCP Design Portfolio</p>
      </header>
      
      <img src="./img/hero-image.png" class="hero" alt=""></img>
      
      <section className="primary title">
        <h1>Multidisciplinary Urban Capstone Project</h1>
        <h2>Design Portfolio</h2>
        <p>By Madeline Ahn</p>
      </section>

      <hr></hr>

      <section className="primary" id="intro">
        <h1>Introduction</h1>

        <h2>Personal Background</h2>
        <p>
          Coming from a background in Computer Science, Statistics, and Digital Humanities, I wanted to take part in a capstone project that could utilize assets from each of my degrees and work on something meaningful; particularly one that would leave a positive impact in my community in some way. I’ve always been driven by the belief that technology, when thoughtfully applied, can be a powerful catalyst for positive change—especially when informed by the human stories behind the data. The Multidisciplinary Urban Capstone Project stood out as a unique opportunity for me to tackle real-world urban challenges through collaborative, community-centered research. The interdisciplinary aspect of the project also allowed me to bring together my technical expertise in data analysis and programming with my passion for the arts, social insight, and critical inquiry.
        </p>

        <h2>Project Overview</h2>
        <p>
          Municipalities across Ontario are continuously facing mounting pressures and are expected to deliver increasingly complex services with limited financial tools. I was placed with my group to collaborate with the Association of Municipalities of Ontario (AMO) and were tasked with examining the structural imbalance between municipal responsibilities and the funding mechanisms available to support them. This project initially focused on evaluating how Ontario’s municipalities are currently using financial tools under the Municipal Act, including property taxes, user fees, debt, and investment strategies, and how these tools can be more effectively leveraged. However, discussions with our community partners resulted in us instead focusing on advocacy for more equitable and sustainable housing.
        </p>
        <p>
          My group was tasked with equipping AMO with well-researched, policy-relevant briefing notes and accessible visual tools to better communicate the structural barriers municipalities face in addressing this crisis. These include challenges around zoning bylaws, missing middle housing, community benefit charges, and the underfunding of social housing. In addition to policy analysis, we proposed improvements to AMO’s website and developed infographics to make complex housing data more understandable to stakeholders and the public. Through this work, we aimed to bridge the gap between data and decision-making—empowering AMO with clearer tools to engage policymakers, inform the public, and advocate for meaningful change in Ontario’s housing landscape.
        </p>
      </section>


      <section className="secondary" id="goals">
        <h1>Goals</h1>
        <p>
        As mentioned, discussion with my group’s community partners based on our academic backgrounds and the scope of the project resulted in us being tasked with creating policy briefing notes, analysing financial data, and assisting in the AMO’s online presence through their website. Below are two of the primary accomplishment statements used for my reference throughout the duration of this project:
        </p>
        <ol>
          <li>Applied qualitative and quantitative research methods to issues surrounding housing across Ontario, and summarized our findings into digestible briefing notes to be presented to our stakeholders.</li>
          <li>Assisted in the development of AMO's website to improve the organization's clarity on their positions on key issues, writing more transparent and accessible points so that the public can understand more easily without any advanced knowledge or terminology.</li>
        </ol>
      </section>


      <section className="primary" id="process">
        <h1>Process Work</h1>
        <p>
          To ensure our design intervention goes smoothly and we plan our time well, we created a Gantt chart outlining the basic stages and steps for our project beginning from the beginning of October to our final deliverable deadline in April. We separated our project into four sections: conducting preliminary research occurring from October to December, developing and refining the proposal after our project requirements were submitted from November until January, doing further research and design refinements to occur after the Winter break until March, and completing the final deliverables in March and April. We have also scheduled regular bi-weekly check-in points with our community partner to address subject-matter questions and receive feedback. By creating this timeline, we hope to communicate tentative deadlines with our community partner and amongst ourselves to ensure that we can stay on track and, if needed, coordinate changes easily and know whenever we may need to change our schedules if any difficulties or complications arise.
        </p>
        <div className="image">
          <img src="/img/gantt-chart.jpg" alt="Gantt Chart"></img>
          <p>Figure 1. Gantt chart visualizing the timeline and deadlines of the project.</p>
        </div>
      </section>

      <section className="primary" id="briefing-note">
          <h2>Briefing Notes</h2>

          <p>
            The briefing notes were the key deliverable for this project, and each member was tasked to create a 1-2 page document that summarizes an issue or subtopic related to the Ontario housing crisis and any courses of actions that can be recommended towards resolving this issue. After doing general research on the Ontario housing crisis for the design proposal, I stumbled across the concept of “missing-middle” (MM) housing, a type of housing offering moderate density and supporting more affordable, available, and diverse homes. The lack of diverse housing options have become a large part of the housing crisis, and Ontario has become taken over by single-detached homes and high-rise apartments. Developing missing middle housing will help meet the needs of lower and middle-income households and create more walkable communities through the development of properties like duplexes, townhouses, or multiplexes.
          </p>
          <p>
            In order to build a strong foundation for this work, I conducted highly in-depth research, including reviews of academic literature, municipal policy documents, and reviewing case studies of MM housing from regions like Vancouver and Minneapolois. This research was synthesized into key insights that were written into a concise and accessible briefing note catered to AMO’s advocacy needs. My recommendations to the organization revolved primarily around pilot program opportunities and addressing public resistance so that municipalities can explore scalable and community-friendly solutions to housing affordability challenges. After a first draft of the briefing note was created, we all received feedback from policy members at AMO and iteratively improved our briefing notes to ensure that the recommendations and information we shared were relevant, realistic, and aligned with AMO’s broader goals. Then, the final draft of these briefing notes were shared with our supervisor and the organization for their reference in the future.
          </p>

          <div className="image">
            <object width="600" height="700" type="application/pdf" data="/briefing-note.pdf?#zoom=60&scrollbar=0&toolbar=0&navpanes=0">
              <p>Error. The PDF could not be viewed.</p>
            </object>
            <p>Briefing note on "missing-middle" housing for AMO.</p>
          </div>
      </section>



      <section className="primary" id="website">
        <h2>Website</h2>
        <p>
        As part of our broader effort to support AMO’s housing advocacy, we also wished to support the organization’s public communication. My group noticed that as we were navigating AMO’s website for policy documents and important pages for research, it was extremely difficult to find the things we needed, and when discussing with other members of the organization, they shared the same sentiments. As a result, I suggested some user experience (UX) design and content changes to the website. Most notably, I wanted to address the site’s disorganized and inconsistent navigation system, as well as the lack of accessible language and visual clarity in content-heavy pages.
        </p>

        <div className="image">
          <div class="two-col">
            <img src="/img/amo.png" alt="AMO website references"></img>
            <img src="/img/references.png" alt="Website inspiration"></img>
          </div>
          <p>Figure 2. Reference of AMO's website/branding, and references from other organization sites.</p>
        </div>

        <p>
        I first did an analysis of the websites of similar organizations to understand what makes a government website appealing to both the public and to members of the organization (see Figure 2). The AMO website is a bit unique compared to others in that it contains many more policy documents than others whilst trying to have a welcoming, friendly appearance, which can create a lot of visual clutter. Websites like the City of Toronto’s page though, for example, offer a more simplistic yet stylized look that can allow for a much better experience for the user. My group members and I helped contribute a set of content recommendations that would help AMO clarify and humanize its messaging, such as revising key policy pages with plain-language summaries, visual aids, or clearly stated positions that can explicitly connect municipal challenges to the organization’s advocacy efforts.
        </p>
        <p>
        For the visuals of the website and with the above references as inspiration, I then began working in Figma to create a mockup for what a revised website could look like for the organization that would allow for easier navigation using the headers and footers (tops and bottoms) that would be displayed on each page. Ideas for creating an “advanced search” page for the website was also proposed, where users could search more specifically based on keywords, categories, types of documents, year, or other filters for more flexibility in their searches without having to navigate through many different pages. Many government and database websites have this feature due to the sheer density of content, and would work well in AMO’s as well for this reason, especially to researchers or policy advisors who may have more specific search criteria than the general public.
        </p>
        <p>
        Overall, this initiative to redesign AMO’s digital platform allowed me to apply principles of UX, information architecture, content strategy, and communication to the organization’s goal of intersecting public policy and civic communication. These proposed changes to the website hopefully inspire the organization to improve their platform to create something more usable, accessible, and understandable to a deeper audience.
        </p>
      </section>

      
      <section className="secondary" style={{alignItems: "center"}} id="website">
        <h3>Mockups</h3>
        <iframe title="AMO Website Mockups" width="800" height="500" src="https://embed.figma.com/design/ZO2orlPRlYUm7jebdmVxtw/MUCP-x-AMO-Prototypes?node-id=2-3668&embed-host=share" allowfullscreen></iframe>
      </section>


      <section className="primary" id="takeaway">
        <h1>Takeaway</h1>
        <p>
        Overall, the Multidisciplinary Urban Capstone Project challenged and expanded the way I think about design, data, and social impact, especially in a context that I had no prior experience in. Being able to apply both the technical and humanistic elements of my academic background in such a meaningful way has been an incredibly formative experience, and the interdisciplinary collaborative nature of this project has strengthened my ability as a computer scientist and researcher. From translating raw financial data into actionable insights to designing clear, accessible policy visuals, I was challenged to consider not just <i>what</i> information we were presenting, but <i>how</i> we were communicating it and to <i>whom.</i>
        </p>
        <p>
        This experience deepened my appreciation for the role that thoughtful design and digital tools play in public advocacy and engagement. Collaborating with AMO has shown me how organizations navigate the tension between technical policy work and public communication, and how user experience design can be a powerful tool to close that gap. Overall, this project reinforced my belief in the value of design as a tool for civic engagement and equipped me with the real-world experience of working with a community partner to address systemic social issues. I leave this capstone project not only with new technical skills and portfolio pieces, but also with a deeper understanding of how thoughtful digital tools and accessible design can help bridge the gap between data and decision-making in the public sector.
        </p>
      </section>


      <footer>
          <p>This webpage was created  for the University of Toronto course URB431Y1: Multidisciplinary Urban Capstone Project.</p>
          <p>Banner image by Bill Badzo, Attribution CC 2.0.
            <br />
            <a href="https://www.flickr.com/photos/onasill/42960141850/in/photostream/">Toronto Ontario - Canada - Sunrise Over The Lake Ontario HDR</a>, via Flickr.
          </p>
          <a class="top" href="#">Back to Top</a>
      </footer>
    </div>
  );
}

export default App;
