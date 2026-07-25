import { assets } from "../../data/data"

function TodoItems(props) {
  return (
    <>
        <div className="flex items-center my-3 gap-2">
            <div className="flex flex-1 items-center cursor-pointer" onClick={() => props.toggleStatus(props.id)}>
                <img src={props.isComplete ? assets.tickIcon : assets.notTickIcon } alt="" className="w-4" />
                <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${props.isComplete ? "line-through" : ""}`}>{props.text}</p>
            </div>

            <img src={assets.deleteIcon} alt="" className="w-3.5 cursor-pointer" onClick={() => props.deleteTodo(props.id)} />
        </div>
    </>
  )
}

export default TodoItems