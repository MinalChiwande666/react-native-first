import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    item: [],
    

}

export const cart = createSlice({
    name: 'AddToCart',
    initialState,
    reducers: {
        setcart(state = initialState, action){
            let check ;
            const newproduct = action.payload.id
            const existingitem = state.item.find((id) =>{ check = id.id === newproduct})
            console.log("existing items => ",check)
            console.log("existing items 2 => ",existingitem)
            if(check === true)
            {
                alert('added already')
            }
            else
            {
                state.item.push(action.payload)
            }
            // if (check === true) {
            //     alert("already added")

            //     console.log(state)
            // }
            // else {
            //     state.item.push(state.newproduct)
            // }
            // console.log("new product => ",newproduct)
            // console.log("state => ",state)
            // let check;
            // state.item.filter((id) => {
            //     check = id.id === newproduct.id
            // })
            // console.log("check item=>", check)
            // if (check === true) {
            //     console.log("already exist")
            // }
            // else if(check === false || check === undefined) {

            //     state.item.push(newproduct)
            // }
        },
        handleqty: (state, action) => {

            let qty = action.payload
            if (qty.act === "minus") {
                state.item.filter((id) => {
                    if (id.id === qty.id) {
                        let q = id.qty--
                        console.log("qty actual =>", q)
                        if (q === 0) {
                            state.item.slice(qty.id)
                        }
                    }
                })
            }
            let add;
            if (qty.act === "add") {
                state.item.filter((id) => {
                    if (id.id === qty.id) {
                        add = id.qty++
                        let priz = id.prize * add
                        console.log(priz)

                    }
                })
            }
            console.log("add count =>", add)
        },

        remove: (state, action) => {

            let iddel = action.payload
            console.log("Id =>", iddel)

            state.item.splice(iddel, 1)


        },
        total: (state, action) => {
            state.item.map((total, i) => {

            })
        }
    },

})