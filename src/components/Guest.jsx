import React, { useState, useEffect, useMemo} from "react";
import 'bulma/css/bulma.css';

const GuestSlot=(props)=>{
    let {_name, _status, _menuop} = props.guest; 
    const [name, setName] = useState(_name);
    const [status, setStatus] = useState(_status);
    const [menuop, setMenuOp] = useState(_menuop);
    
    const updateStatus = (e)=>{
        e.preventDefault();
        setStatus(e.target.value)
    };
    const updateMenu =(e)=>{
        setMenuOp(e.target.value)
    };

    return (
        <div className="box is-2by3">
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" 
                    type="text"
                    onChange={(e)=>{setName(e.target.value)}}
                    val
                    ue={name}
                    ></input>
                </div>
            </div>
                <label className="label">Will {name.split(" ")[0]} be attending?</label>
            <div className="field is-grouped">
                <div className="control">
                    <button className={status == 1? "button is-success" : "button"}
                    value = {1}
                    onClick={(e)=>updateStatus(e)}
                    >Yes</button>
                </div>
                <div className="control">
                    <button 
                    className={status == 0? "button is-danger" : "button"}
                    value={0}
                    onClick={(e)=>updateStatus(e)}
                    >No</button>
                </div>
            </div>
            <div className={status == 1? "" : "is-invisible"}>
                <div className="field">
                    <div className="control">
                        <label className="label">Please Select a Menu Option</label>
                        <select className="select" onChange={(e)=>updateMenu(e)}>
                            <option value = "0">Select a Meal Option</option>
                            <option value = "1">Sandwich</option>
                            <option value = "2">Salad</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default function ShowGuest(props){
    const [list, setList] = useState(props.list.Guests)
    return(
        <div className="container">
            {list.map((guest, ind)=> <GuestSlot key={ind} guest={guest}></GuestSlot>)}
        </div>
    )
}
