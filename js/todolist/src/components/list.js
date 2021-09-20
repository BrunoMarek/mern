import React, {useState} from 'react';


const List = () => {
    const [formInfo, setFormInfo] = useState({
        tasks:"",
        checked:false
    })

    const changeHandler = (e) =>{
        setFormInfo({
            ...formInfo,[e.target.name]:e.target.value
        })
    }

    const [list, setList] = useState([])

    const addTaskk = (e) =>{
        e.preventDefault();
        setList([...list,formInfo]);
        setFormInfo({
            tasks:"",
            checked:false
        })
    }

    const taskDone = (i)=>{
        let vanish = list.filter((i)=>{
        })
        setList(vanish);
    }

    return (
        <>
        <div>
            <form onSubmit={(e)=>addTaskk(e)}>
                <div className="form-group">
                    <input name="tasks" onChange={(e) => changeHandler(e)} type="text" value={formInfo.tasks} />
                </div>
                <input className="btn btn-success" type="submit" value="Add" />
            </form>
            <hr />
            
            {list.map((taskk,i)=>{
                const todoList =[];
                return <div key={i} className="form-group">
                        <p className={todoList.join(" ")} >{taskk.tasks}</p>
                        <input type="checkbox" name="done" id="" />
                        <button onClick={(e)=>taskDone(i)} className="btn btn-danger">Delete</button>
                    </div>
            })
            }
        </div>
        </>
    );
}



export default List;
