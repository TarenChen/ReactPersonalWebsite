import React from 'react'
import './Contact.css'
function Contact(){
    return(
        <div class = "Contact">
            <center>
                <div class = "row">
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