import React from 'react';
import reactDom from 'react-dom';
import './sass/index.scss'

import Card from './components/Card';



const App = () => {
    
    return (
        <>
            <div className="card-group">
             
             <Card cardTitle="İzmir" 
                   cardText="Lorem Ipsum I" 
                   updatedTime="Last update 1 min " 
                   image="https://picsum.photos/id/1/200/300" />

             <Card cardTitle="Adana"
                   cardText="Lorem Ipsum II" 
                   updatedTime="Last update 2 min " 
                   image="https://picsum.photos/id/10/200/300" />

             <Card cardTitle="urfa" 
                   cardText="Lorem Ipsum III" 
                   updatedTime="Last update 3 min " 
                   image="https://picsum.photos/id/100/200/300"/>

                
            </div>
        </>
    );
}

reactDom.render(
    <>
    <App />
    </>,
    document.getElementById('root')
);

 export default App();