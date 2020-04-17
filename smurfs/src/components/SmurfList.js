import React, {useContext} from 'react';
import {SmurfsContext} from '../context/SmurfsContext';
import Create from './Create';

const SmurfList = () => {
    const smurfs = useContext(SmurfsContext);
    return (
        <div>
            {console.log(smurfs)}
            <Create />
            {smurfs.map((smurf, index) => {
                return (
                    <div key={index} class='cards'>
                        <p>Smurf Name: {smurf.name}</p>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.height}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default SmurfList;