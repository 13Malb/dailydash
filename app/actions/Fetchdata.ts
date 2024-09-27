
const Fetchdata = async (url:String | any) => {
    const res = await fetch(url,{ cache: 'force-cache' })
    if(!res.ok){
        console.log('oops something went wrong')
    }
     return res.json()
}
 
export default Fetchdata;