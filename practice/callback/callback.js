const perone=(friend,pertwo)=>{
    console.log(`i am busy rigth now .i am takiing ${friend}`)
    pertwo()
}
const pertwo=()=>{
    console.log(`i call back you dekha `)
}
perone("prakash",pertwo)

