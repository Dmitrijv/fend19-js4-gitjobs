import React from "react";
import { mount } from "enzyme";
import { BrowserRouter, Link } from "react-router-dom";

import JobItem from "../JobItem";

describe("Test JobItem component for expected behaviour", () => {
  const jobItem = {
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
  };

  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <JobItem item={jobItem} />
      </BrowserRouter>
    );
  });

  it("should have the correct link styling class", () => {
    expect(wrapper.find("li a.App-link").length).toBe(1);
  });

  it("should redirect to the correct job description page", () => {
    const expectedLink = `/job-description/${jobItem.id}`;
    expect(wrapper.find(Link).props().to).toBe(expectedLink);
  });

  it("should contain the correct job title", () => {
    const title = wrapper.find("li a.App-link").text();
    expect(title).toContain(jobItem.title);
  });
});
