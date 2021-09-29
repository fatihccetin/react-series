import React from 'react';
import reactDom from 'react-dom';
import './sass/index.scss'

import Card from './components/Card';



const App = () => {
    
    return (
        <>
            <div className="card-group">
             
             <Card cardTitle="İzmir" />

             <Card cardTitle="Adana" />

             <Card cardTitle="urfa" />

                
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