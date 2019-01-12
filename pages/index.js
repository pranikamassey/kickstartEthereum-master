import React, { Component } from "react";
import factory from "../ethereum/factory.js";
import {
  Card,
  Button
} from "semantic-ui-react"; /*https://react.semantic-ui.com/views/card#types-group-props*/
/*https://react.semantic-ui.com/elements/button#types-labeled-icon-shorthand*/
/*import 'semantic-ui-css/semantic.min.css';*/
import Layout from "../components/Layout.js";
import { Link } from "../routes.js";

class CampaignIndex extends Component {

  static async getInitialProps() {
   
    const campaigns = await factory.methods
      .getDeployedCampaign()
      .call(); 
    //return {campaigns : campaigns}
    return { campaigns };
    //console.log(campaigns);
  }

  renderCampaigns = () => {
    const items = this.props.campaigns.map(address => {
      return {
       
        header: address,
        image: "https://react.semantic-ui.com/images/avatar/small/daniel.jpg",
         style: {
           overflowWrap: "break-word",
          height: "100%",
          width: "50%"
        },
        description:(
          <Link route = {`/campaigns/${address}`}>
          <a>View campaign</a>
          </Link> ), 
        fluid: true 
      };
    });

    return (
      <Card.Group items={items} />
    );
  };

  
  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
         
          <Link route="/campaigns/new">
            <a>
              {" "}
              
              <Button
                content="Create Campaign"
                icon="add circle"
                labelPosition="left"
                floated="right"
                primary
              />
            </a>
          </Link>

          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;