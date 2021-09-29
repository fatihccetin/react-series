import React from "react";
import '../sass/index.scss';

const Collapse = (props) => {
    console.log(props.children);
    return (
        <div>
            <a className="btn btn-primary" data-bs-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
               {/* concat iki string birleştirme */}
                Link with href
            </a>
            <div className="collapse" id={props.href}>
                      {props.children}
            </div>
        </div>

    );
};

export default Collapse;