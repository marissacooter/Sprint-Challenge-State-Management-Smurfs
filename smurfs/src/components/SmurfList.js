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
                    <div key={index}>
                        <p>name:{smurf.name}</p>
                        <p>age:{smurf.age}</p>
                        <p>height:{smurf.height}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default SmurfList;