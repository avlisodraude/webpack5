import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";
class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seo_title: ""
        };
    }
    handleChange = (event) => {
        //http://www.qc4blog.com/?p=650
        // diff bet' target and currentTarget
        // console.log(event.currentTarget.value);
        console.log(event.target.value)
        this.setState({ [event.target.id]: event.target.value });
    };
    render() {
        const { seo_title } = this.state;
        return (
            <form id="article-form">
                <Input
                    text="SEO title"
                    label="seo_title"
                    type="text"
                    id="seo_title"
                    value={seo_title}
                    handleChange={this.handleChange}
                />
            </form>
        );
    }
}
export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;