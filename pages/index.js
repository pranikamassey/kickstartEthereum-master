import React, { Component } from "react";
import factory from "../ethereum/factory.js";
import {
  Card,
  Button,
  Segment
  
} from "semantic-ui-react"; /*https://react.semantic-ui.com/views/card#types-group-props*/
/*https://react.semantic-ui.com/elements/button#types-labeled-icon-shorthand*/
/*import 'semantic-ui-css/semantic.min.css';*/
import Layout from "../components/Layout.js";
import { Link } from "../routes.js";

// const ImageExampleFluid = () => <Image src='https://react.semantic-ui.com/images/wireframe/image.png' fluid />


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
        description:(
          <Link route = {`/campaigns/${address}`}>
          <a color='green'>View campaign</a>
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
      <Layout >
        
        <div>
        
          <h3>Open Campaigns</h3>
         
          <Link route="/campaigns/new">
            <a>
              {" "}
              
              <Button
                inverted color = 'olive'
                content="Create Campaign"
                icon="add circle"
                labelPosition="left"
                floated="right"

                primary
              />
              <button class="ui inverted button">Standard</button>
            </a>
          </Link>

          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex ;
