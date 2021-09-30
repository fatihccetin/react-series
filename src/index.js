import React from 'react';
import reactDom from 'react-dom';
import './sass/index.scss'

import Card from './components/Card';
import Collapse from './components/Collapse';



const App = () => {

    return (
        <div className="container">

            <div className="row">
                <div className="card-group w-100">

                    <div className="col">

                        <Collapse href="collapseExample1">
                            <Card cardTitle="İzmir"
                                cardText="Lorem Ipsum I"
                                updatedTime="Last update 1 min "
                                image="https://picsum.photos/id/1/200/300" />
                        </Collapse>
                    </div>
                    <div className="col">

                        <Collapse href="collapseExample2">
                            <Card cardTitle="Card Title2"
                                cardText="Lorem Ipsum II"
                                updatedTime="Last update 2 min "
                                image="https://picsum.photos/id/10/200/300" />
                        </Collapse>
                    </div>

                    <div className="col">

                        <Collapse href="collapseExample3">
                            <Card cardTitle="card Title 3"
                                cardText="Lorem Ipsum III"
                                updatedTime="Last update 3 min "
                                image="https://picsum.photos/id/100/200/300" />
                        </Collapse>
                    </div>

                </div>
            </div>

        </div>
    );
}

reactDom.render(
    <>
        <App />
    </>,
    document.getElementById('root')
);

export default App();