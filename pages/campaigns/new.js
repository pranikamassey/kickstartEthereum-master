import React, { Component } from "react";
import Layout from "../../components/Layout.js";
import { Form, Button, Input, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory.js"; 
import web3 from "../../ethereum/web3.js";

import {Router} from '../../routes.js';

class CampaignNew extends Component {
  
  state = {
    minimunContribution: "",
    errorMessage: "",
    loading: ""
  };

  onSubmit = async event => {
    event.preventDefault();
    this.setState({loading:true, errorMessage:""});
    try {
      const accounts = await web3.eth.getAccounts();
      //console.log(accounts);
      await factory.methods
        .createCampaign(this.state.minimunContribution)
        .send({
          from: accounts[0]
        });
        
        Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({loading:false});
  };

  render() {
    return (
     
      <Layout>
        <h3>Create a campaign</h3>
        <Form onSubmit={this.onSubmit} error = {!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minimunContribution}
              onChange={event =>
                this.setState({ minimunContribution: event.target.value })
              }
            />
            
          </Form.Field>
          <Message error header = "Hubo un error" content = {this.state.errorMessage}/>
          <Button loading={!!this.state.loading} primary >Create!</Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
