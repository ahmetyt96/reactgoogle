import { Component } from "react";
import React from "react";
import GoogleMaps from "simple-react-google-maps";
import LocatorButton from "../App/LocatorButton";






export default class Maps extends Component {





    render() {




        return (

            <div className="container">

                <GoogleMaps style={{ height: "700px", width: "570px" }}
                    apiKey={"AIzaSyCUhbQFtjU7WH8fTNc6_shQ5uh8YoEPHV8"}
                    zoom={10}
                    center={{
                        lat: 38.423765,
                        lng: 33.664428,
                    }}
                    markers={{
                        lat: 38.423765,
                        lng: 33.664428,
                    }}
                />

                <button >
                    <h3>Kendi Konumunuz</h3>
                </button>
            </div>

        )


    }


}


