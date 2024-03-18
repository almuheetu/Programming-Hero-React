//COnditional rendering
// export default function Todo({task, isDone}){
//    if(isDone === true){
//     return <li>Finished: {task}</li>
//    }
//     else{
//         return <li>Work on: {task}</li>
//     }
// }


//COnditional rendering option-2
// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Finish: {task}</li>
//     }
//     return <li>Work on: {task}</li>
// }




//COnditional rendering option-3
export default function Todo({task, isDone}){
    return (
        <li> {isDone ? 'Finished': 'Work on' } : {task}</li>
    )

    }
