import React from "react";
import '../sass/index.scss';


//İlk constructor calıştı 
//render ılk defa calıstı 
//onclıck eventi çalıştı
//setState rnder methedunu tekrar calıştırıyor 

class Collapse extends React.Component {
    constructor(){
        super();

        this.state={
            showContent: false
        }
    }
        // showMore(){
        //         this.setState({showContent: true})
        // }

        showMore = () => {
            //console.log(this);
            this.setState({showContent: !this.state.showContent})

            
        }
    render(){
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                   {/* 
                "  data-bs-toggle="collapse" href={"#".concat(this.props.href)} role="button" aria-expanded="false" aria-controls="collapseExample"concat iki string birleştirme */}
                    Link with href
                </button>
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