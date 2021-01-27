import React from 'react';
import {Form, FormGroup, Label, Input, Button, FormText} from 'reactstrap';

function Contact(props) {
    return (
        <div className="container">
            <div className="row tt-card bg-w tt-c-b">
                <div className="col-12 col-sm-6">
                <h3>Contact Us</h3>
<span>Feel free to reach us.</span>
                </div>
<div className="col-12 col-sm-6">
<Form>
          <FormGroup>
            <Label for="Name">Name</Label>
            <Input type="name" name="name" id="name" placeholder="Your Name" />
          </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Your Email id"/>
      </FormGroup>
      <FormGroup>
        <Label for="telenum">Mobile No.</Label>
        <Input type="number" name="telenum" id="telenum" placeholder="Your Mobile No."/>
      </FormGroup>
      <FormGroup>
        <Label for="message">Message <small>(optional)</small></Label>
        <Input type="textarea" name="message" id="message" placeholder="Write something"/>
      </FormGroup>
      <Button color="primary">Submit</Button>
    </Form>
</div>
            </div>
            
        </div>
    );
}

export default Contact;