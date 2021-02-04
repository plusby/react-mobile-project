
export function get(url){
    return new Promise((resolve,rej)=>{
        fetch(url).then(res=>{
            console.log(res)
            resolve(res.json())
        },err=>{
            rej(err)
        })
    })  
}