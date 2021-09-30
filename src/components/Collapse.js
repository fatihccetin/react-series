import React from "react";
import '../sass/index.scss';

class Collapse extends React.Component {
    constructor(){
        super();

        this.state={
            showContent: true
        }
    }

    render(){
        return (
            <div>
                <a className="btn btn-primary w-100">
                   {/* 
                "  data-bs-toggle="collapse" href={"#".concat(this.props.href)} role="button" aria-expanded="false" aria-controls="collapseExample"concat iki string birleştirme */}
                    Link with href
                </a>
                {
                    this.state.showContent ? (
                    <div className="collapse show" >
                    {this.props.children}
                       </div>) : null
                }
                
            </div>
        
        );
    }
   
    
};

export default Collapse;