import React, {useState} from 'react';
import axios from 'axios';

export default function Create() {
    //local application state
    const [smurfData, setSmurfData] = useState({
        name:'',
        age:'',
        height:'',
    });

    //on submit handler and axios call to post my data
    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3333/smurfs', smurfData)
            .then((res) => {
                setSmurfData({
                    ...smurfData,
                    name:'',
                    age:'',
                    height:''
                })
                console.log(res);
            })
            .catch((err) => {
                console.log('The data was not returned', err);
            });
    };

    //onChange handler
    const handleChanges = (e) => {
        e.preventDefault();
        setSmurfData({
            ...smurfData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        //creating my input form
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='name'
                    placeholder='Enter Smurf Name'
                    value={smurfData.name}
                    onChange={handleChanges}
                />
                <input
                    type='text'
                    name='age'
                    placeholder='Enter Age'
                    value={smurfData.age}
                    onChange={handleChanges}
                />
                <input
                    type='text'
                    name='height'
                    placeholder='Enter Height'
                    value={smurfData.height}
                    onChange={handleChanges}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}