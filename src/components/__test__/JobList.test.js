import React from "react";
import { mount } from "enzyme";
import { BrowserRouter, Link } from "react-router-dom";

import JobList from "../JobList";

describe("Test JobList component for expected behaviour", () => {
  const searchKeyword = "javascript";
  const searchResults = [
    {
      id: "35842a28-ff88-47ba-99e5-f9960ae901a4",
      type: "Full Time",
      url: "https://jobs.github.com/positions/35842a28-ff88-47ba-99e5-f9960ae901a4",
      created_at: "Wed Jan 20 20:13:28 UTC 2021",
      company: "Mastermind",
      company_url: "https://mastermind.co",
      location: "Remote",
      title: "Startup Software Developer",
      description:
        "<p>The Pandemic has turned the world upside-down and created an enormous opportunity to reinvent virtual learning. Mastermind is a high-growth, remote-first startup founded in 2020 focused on building a platform for Creators and next-gen teachers to share their passion/knowledge with the world and monetize their following with LIVE Courses and other virtual experiences.</p>\n<p>Founded by repeat entrepreneurs Chris Sukornyk (formerly Chango) and Candice Faktor (formerly Wattpad) in 2020 you would be joining on the ground floor with and incredible team backed by major investors (yet to be announced). Come create the future of learning! You'll work on a small and extremely agile team, iterating rapidly toward the elusive Product-Market Fit. We hire for character first, skills second. Passion, curiosity and drive wanted!</p>\n<p>About the Role\nIn your role as a full stack developer, you'll be working closely with a fast-moving product and technology team to push our product in new directions while also shaping the next iterations of the features our customers already love. You'll define the future of core pieces of our product across areas such as payments, reporting, security, video conferencing and more. From front-end usability to back-end algorithms, you'll hone your skills across multiple domains while helping to drive the product and vision forward.</p>\n<p>Some of the responsibilities of a full stack developer at Mastermind are:</p>\n<ul>\n<li>Perform end to end engineering of Mastermind’s core product from design, develop, test, release, deploy, upgrade and production</li>\n<li>Perform code reviews for your peers</li>\n<li>When required, participate in production support, including deployment, training and setting up and incident response</li>\n<li>Contribute to automation tools to aid development, testing and delivery of customer and product requirements</li>\n<li>Take individual responsibilities to drive timely execution of projects and sprints, including estimates, status update and reviews</li>\n<li>Uphold the quality of the product or features, including unit test, functional test, integration, performance, security and scalability</li>\n<li>Understand and contribute to company best practices for code quality and velocity</li>\n<li>Participate in architecture design and decisions, communicate significance/impact of a solution with the rest of the team</li>\n<li>Produce documentation on code, system design, architecture and solutions</li>\n</ul>\n<p>Skills</p>\n<ul>\n<li>2-5 years of industry experience building fast, reliable, real-time web-based applications</li>\n<li>Experience with NodeJS and React or similar technologies</li>\n<li>A deep understanding of Typescript and Javascript APIs</li>\n<li>Knowledge of relational and non-relational databases</li>\n<li>Experience in working with modern build tools</li>\n<li>Understand of common Design Patterns, OOPS concepts and SOLID design principles</li>\n<li>A self-starter with a strong desire to work on a small collaborative team in an agile environment</li>\n<li>Ability to collaborate with cross-functional team members</li>\n<li>A pragmatic, customer-first, and get-things-done kind of attitude</li>\n</ul>\n<p>Benefits and Perks</p>\n<ul>\n<li>Talented, passionate and collaborative team who will support and inspire you</li>\n<li>Personal growth plans that let you stretch yourself or grow in new directions</li>\n<li>Annual health &amp; wellness stipend</li>\n<li>Annual online courses stipend</li>\n</ul>\n",
      how_to_apply: '<p>Email your resume to <a href="mailto:work@mastermind.co">work@mastermind.co</a></p>\n',
      company_logo:
        "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZytXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--431ee4b4de491ec2987b3d94250445b3ea5c0186/logo-small.png",
    },
    {
      id: "dcf7cacf-ac39-4e6e-a5df-83135f69cff0",
      type: "Full Time",
      url: "https://jobs.github.com/positions/dcf7cacf-ac39-4e6e-a5df-83135f69cff0",
      created_at: "Wed Jan 20 14:03:36 UTC 2021",
      company: "whynow",
      company_url: "https://whynow.co.uk/",
      location: "London",
      title: "Full Stack Developer / WooCommerce Wizard",
      description:
        "<p>whynow is a new arts and culture digital platform promoting personal, powerful and positive stories in the capital and beyond.</p>\n<p>As a subscription platform, members of whynow get access to a growing range of videos, articles, podcasts and more.  We are looking for a woocommerce wizard who will work with us and be responsible for the maintenance and growth of both our frontend checkout system, built in React and the accompanying custom woocommerce extensions written in PHP running on our headless CMS.</p>\n<p>This position requires full stack programming skills in the following technologies: (Woocommerce, React, PHP, SQL, writing tests). The candidate should have a strong understanding of woocommerce and wordpress as a content management system. Although this is a focused position the ideal candidate should have a good grasp on the entire web development process from UX design through to development, testing and deployment. The candidate would need to have the ability to follow and track issues, write code and test changes on both the frontend and backend of our checkout system.</p>\n<p>As we are a young company in constant evolution our long term goal for this role would also be to facilitate moving away from the dependency on woocommerce at scale. This would involve consultancy on the alternative e-commerce packages available and working on the migration itself which would involve some nifty script writing and SQL query abilities.\nResponsibilities\nDeveloping and optimising the overall frontend checkout process\nDeveloping and maintaining the backend of the checkout\nMonitoring woocommerce version updates and addressing breaking changes\nBuild on and develop and test our coupon and promotional systems\nWrite tests for edge cases to catch potential bugs on checkout\nTroubleshooting customer subscription reporting that feeds into google analytics and hubspot\nConsulting and research on viable ecommerce platform alternatives\nFacilitating potential migration to another CMS and ecommerce platform at scale\nWorking on the development of new ecommerce features such as a store</p>\n<p>Skills Required\nComplete understanding of web development basics:\nHTML5\nCSS3\nJavaScript\nStrong understanding of the woocommerce platform and some experience developing in this environment\nSolid understanding of development in the following web technologies relevant to our stack:\nReact\nPHP\nSQL\nExperience developing fully responsive ecommerce websites and applications\nComfortable working with chrome inspector debugging tools\nKnowledge of headless cms architecture and how to interact with RESTful APIs and data in JSON format\nProficient working knowledge of git version control\nStrong understanding of PHP development and wordpress</p>\n<p>PLEASE NOTE:</p>\n<ol>\n<li>This is a programming job. You MUST have 4+ years experience in web and software development technology.</li>\n<li>You MUST have experience in woocommerce or have completed some online training in this platform to be considered for this role.</li>\n<li>You MUST be in London and able to come into the office and work on location.</li>\n<li>You MUST be fluent in English.</li>\n</ol>\n<p>Salary competitive\nHoliday standard</p>\n",
      how_to_apply:
        '<p>Please email your CV and a cover letter to me at <a href="mailto:connor@whynow.co.uk">connor@whynow.co.uk</a></p>\n',
      company_logo:
        "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1NXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--65a93ab1c962ad69d2724d5791201cb0f2377646/whynow-login-logo.png",
    },
  ];

  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <JobList jobList={searchResults} />
      </BrowserRouter>
    );
  });

  it("result list should have correct number of items", () => {
    expect(wrapper.find("JobItem").length).toBe(searchResults.length);
  });

  it("result list should contain a valid link to a job description page", () => {
    const jobIndex = 0;
    const jobId = searchResults[jobIndex]["id"];
    const expectedLink = `/job-description/${jobId}`;
    expect(wrapper.find(Link).at(jobIndex).props().to).toBe(expectedLink);
  });
});
