import React, { useState } from "react";
import './CardProfile.css'

export default function CardProfile(props) {
    return (
        <div className="Card">
            <div className="upper-container">
                <div className="image-container">
                    <img src={props.img} alt="" height="70px" width="70px" />
                </div>
            </div>
            <div className="lower-container">
                <h3> { props.nama } </h3>
                <h4> { props.univ } </h4>
                <h4> {props.nim} </h4>
                <p id="about"> { props.about } </p>
                <div className="akun">
                    <button>
                        <div> <img id="middle" src={props.ig} width="15" height="15"/> Instagram </div>
                    </button>
                    <button>
                        <div> <img id="middle" src={props.git} width="15" height="15"/> Github </div>
                    </button>
                    <button>
                        <div> <img id="middle" src={props.wa} width="15" height="15"/> WhatsApp </div>
                    </button>
                    <button>
                        <div> <img id="middle" src={props.mail} width="15" height="15"/> Gmail </div>
                    </button>
                    <button>
                        <div> <img id="middle" src={props.in} width="15" height="15"/> LinkedIn </div>
                    </button>
                </div>
            </div>
        </div>
    );
  }
  