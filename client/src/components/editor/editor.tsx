import React, {Component} from 'react';
import {Editor} from "primereact/editor";
import {Button} from "primereact/button";
import "./editor.scss";


export default class EditorDemo extends Component <any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            text1 : '<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>',
            text2 : ''
        };
    }
    renderHeader() {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Iaalic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
                <button className="ql-formula" aria-label="Formula"></button>
                <button className="ql-strike"></button>  
                <button className="ql-image"></button>
                <button className="ql-video"></button>
                <button className="ql-code-block"></button>
                <button className="ql-emoji"></button>
            </span>
        );
    }

    render() {
        const header = this.renderHeader();

        return (
            <div>
                <div className="content-section introduction">
                </div>

                <div className="content-section implementation">
                    <Editor 
                    // headerTemplate={header}
                    theme = "bubble"
                    // theme = "snow"
                     value={this.state.text2}
                      onTextChange={(e)=>this.setState({text2:e.htmlValue})}
                      
                      />
                    <div className="border"></div>
                    <p style={{width: "60vw" ,margin : "auto"}}> {this.state.text2 ||'empty'}</p>

                    <Button label="Clear" icon="pi pi-times" onClick={() => this.setState({text2:''})}/>
                </div>
            </div>
        );
    }
}