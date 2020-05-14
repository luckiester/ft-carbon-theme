import React from "react";
import {
  HomepageBanner,
  HomepageCallout,
  Row,
  Column,
} from "gatsby-theme-carbon";
import HomepageTemplate from "./HomepageTemplate";
import {
  calloutLink,
  banner,
  rowText,
  mainContent,
} from "./Homepage.module.scss";
import {
  blogContent,
  blogContentCol1,
  blogContentCol2,
  blogCards,
  blogCard1,
  blogCard2,
  actionLink,
  closeIcon,
} from "./BlogContent.module.scss";
import {
  quoteContent,
  quoteRow,
  requestDemoContent,
  requestDemoRow,
  requestDemoActions,
  contactUs,
} from "./QuoteContent.module.scss";

import Carbon from "../../images/carbon.jpg";
import Freight1 from "../../images/freight1.png";
import { Close20 } from "@carbon/icons-react";

const FirstLeftText = () => (
  <span className={rowText}>
    <h1>Start simplifying your EDI Services</h1>
    <p>
      Freight Trucking partners and companies can proactively schedule shipment
      pickups and deliveries, digitally confirm pickups and deliveries, and
      provide digital proof of deliveries (PODs) & even sign 100% digitally
      without any use of paper bills of lading.
    </p>
  </span>
);

const FirstRightText = () => (
  <div>
    <img src={Freight1} alt="freight1" />
  </div>
);

const SecondLeftText = () => (
  <div>
    <img src={Freight1} alt="freight1" />
  </div>
);

const SecondRightText = () => (
  <span className={rowText}>
    <h1>Clear and Transparent Pricing</h1>
    <p>
      Freight Trust Platform is designed to create a seamless communication
      workflow. Think of it as a Control Tower, EDI and TMS rolled into one.
    </p>
  </span>
);

const BannerText = () => (
  <div className={banner}>
    <h1>Next Generation EDI</h1>
    <p>
      From an Industry Exclusive Automated Detention Claims & Same-day Invoicing
      to Automated Price Quoting and Dispatching, enable a seamless
      communications platform that integrates with your Transportation
      Management System, Accounting, Dispatching, ELD, & more.
    </p>
    <a href="#">Start free trial</a>
  </div>
);

const BlogCard = ({headerText, contentText, actionText}) => (
  <div>
    <h1>{headerText}</h1>
    <p>{contentText}</p>
    <span className={actionLink}>{actionText}</span>
    <span className={closeIcon}>
      <Close20 />
    </span>
  </div>
);

const BlogCards = () => (
  <Row className={blogCards}>
    <Column className={blogCard1} colMd={5} colLg={5}>
      <BlogCard
        headerText="Start simplifying your EDI Services"
        contentText="Freight Trucking partners and companies can proactively schedule shipment pickups and deliveries, digitally confirm pickups and deliveries, and provide digital proof of deliveries (PODs) & even sign 100% digitally without any use of paper bills of lading."
        actionText="GET PRICING"
      />
    </Column>
    <Column colMd={2} colLg={2}></Column>
    <Column className={blogCard2} colMd={5} colLg={5}>
      <BlogCard
        headerText="Clear and Transparent Pricing"
        contentText="Freight Trust Platform is designed to create a seamless communication workflow. Think of it as a Control Tower, EDI and TMS rolled into one."
        actionText="REQUEST A DEMO"
      />
    </Column>
  </Row>
);

const BlogContent = () => (
  <div>
    <Row className={blogContent}>
      <Column className={blogContentCol1} colMd={3} colLg={3}></Column>
      <Column className={blogContentCol2} colMd={9} colLg={9}>
        <h4>
          Port Operations available at the Port of Oakland and Port of Los Angeles
        </h4>
        <h1>
          We are the only provider that completely automates detention, invoicing,
          & more.
        </h1>
        <h3>WE PUT OUR CUSTOMERS FIRST</h3>
      </Column>
    </Row>
    <BlogCards />
  </div>
);

const QuoteContent = () => (
  <div className={quoteContent}>
    <Row className={quoteRow}>
      <Column colMd={6} colLg={6}>
        <h1>Stop Deadheading & Detention</h1>
        <h3>Start Automating & Getting Paid, today.</h3>
        <p>The [Freight Trust] Platform fits into our existing solution set and exceeds our expectations. It has fulfilled all of our digital freight requirements, seamlessly. Phone and Text support has been superb.</p>
      </Column>
      <Column colMd={1} colLg={1}></Column>
      <Column colMd={5} colLg={5}>
        <img src={Freight1} alt="freight1" />
      </Column>
    </Row>
  </div>
)

const RequestDemoContent = () => (
  <div className={requestDemoContent}>
    <Row className={requestDemoRow}>
      <Column colMd={6} colLg={6}>
        <h1>Ready to get started?</h1>
        <h2>Sign up or contact us</h2>
      </Column>
      <Column className={requestDemoActions} colMd={6} colLg={6}>
        <a>Request Demo</a>
        <a className={contactUs}>Contact Us</a>
      </Column>
    </Row>
  </div>
)


const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Freight1} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#16a085"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
  BlogSection: <BlogContent />,
  QuoteSection: <QuoteContent />,
  RequestDemoSection: <RequestDemoContent />,
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;