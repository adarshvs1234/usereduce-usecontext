

export const initialstore = {

    name:"ADARSH"
}

const Reducer = (state,action) => {

    if(action.type === "CHANGE")
        
        return{
            ...state,
            name:state.name= "JEFFRIN"

        }

}



export default Reducer
