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




//COnditional rendering option-3: Ternary operator
// export default function Todo({task, isDone}){
//     return (
//         <li> {isDone ? 'Finished': 'Work on' } : {task}</li>
//     )

// }


//COnditional rendering option-4: &&
// export default function Todo({task, isDone}){
//     return (
//         <li> {task}  {isDone && ': DoneTOm'}</li>
//     )

// }



 //COnditional rendering option-5: ||
// export default function Todo({task, isDone}){
//     return (
//         <li> {task}  {isDone || ': Do it'}</li>
//     )

// }




// conditional rendering option 6
export default function Todo({task, isDone}){

    let listItem;
    if(isDone){
        listItem = <li>Finish: {task}</li>
    }
    else{
        listItem = <li>Work on: {task}</li>
    }
    return listItem;
}
