import React, { useState, useEffect} from "react";
import 'bulma/css/bulma.css';

const useCStyle=(init=true, styleClass="is-invisible")=>{
    let [style, setStyle] = useState(styleClass);
    let [state, setState] = useState(init);
    useEffect(()=>{
        state? setState(style) : setState("")
    }, [state, style])
    const applyStyle = ()=>{
        return setState(true)
    };
    const removeStyle = ()=>{
        return setState(false)
    };
    return [state, applyStyle, removeStyle]
};

export default function GuestSlot(props){
    let {_name, _status, _menuop} = props.guest; 
    const [name, setName] = useState(_name);
    const [status, setStatus] = useState(_status);
    const [menuop, setMenuOp] = useState(_menuop);
    const [style, apply, remove] = useCStyle();
    const updateStatus = (e)=>{
        e.preventDefault();
        setStatus(e.target.value)
    };
    const updateMenu =(e)=>{
        setMenuOp(e.target.value)
    };
    useEffect(()=>{
        status? apply() : remove();
    }, [status, style, apply, remove])
    return (
        <div className="box">

            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" 
                    type="text"
                    onChange={(e)=>{setName(e.target.value)}}
                    value={name}
                    ></input>
                </div>
            </div>
            <div className="field is-grouped">
                <label>Will {name} be attending the wedding?</label>
                <div className="control">
                    <button className="button"
                    value = {true}
                    onClick={(e)=>updateStatus(e)}
                    >Yes</button>
                </div>
                <div className="control">
                    <button className="button"
                    value={false}
                    onClick={(e)=>updateStatus(e)}
                    >No</button>
                </div>
            </div>
            <div className={style}>
                <div className="field">
                    <div className="control">
                        <select onChange={(e)=>updateMenu(e)}>
                            <option value = "0">Select a Meal Option</option>
                            <option value = "1">Sandwaich</option>
                            <option value = "2">Salad</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
};

