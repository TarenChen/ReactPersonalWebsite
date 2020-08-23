import React from 'react'
import { Form, Label, Input, FormGroup, Button} from 'reactstrap'

import './Contact.css'
function Contact(){
    return(
        <div class="Contact">
            <h2>Send me a message!</h2> <br></br>
            <Form>
                <FormGroup>
                    <Label for="Name">Name</Label>
                    <Input type="name" name="name" placeholder="Your Name" />
                </FormGroup>
                <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input type="email" name="email" placeholder="Your Email Address" />
                </FormGroup>
                <FormGroup>
                    <Label for="Message">Message</Label>
                    <Input type="textarea" name="message" placeholder="Your Message" />
                </FormGroup>
                <Button>Send</Button>
            </Form>
            <br></br>
            <center>
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <a class="btn-lg" href="https://www.linkedin.com/in/tarenchen/" target="_blank"><i class="fab fa-linkedin fa-10x"></i></a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <a class="btn-lg" href="https://www.instagram.com/tarenchen3/" target="_blank"><i class="fab fa-instagram fa-10x"></i></a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <a class="btn-lg" href="https://www.facebook.com/tarenchen" target="_blank"><i class="fab fa-facebook-square fa-10x"></i></a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <a class="btn-lg" href="https://github.com/TarenChen" target="_blank"><i class="fab fa-github-square fa-10x"></i></a>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default Contact