import { useState,useEffect } from "react";

const useAction = () => {

    const [state,setState] = useState({
        list:[]
    })

    const [urlRequest,setUrlRequest] = useState({
        url:"",
        request:{},
        action:""
    })

    useEffect(() => {
        getList();
    },[])
    
    //ei saa olla async, mutta fetch vaatii että on async await. 
    //siksi on urlRequest, joka odottaa että arvot muuttuu.
    useEffect(() => {

        const fetchData = async () => {
            if(!urlRequest.url) {
                return;
            }
            const response = await fetch(urlRequest.url,urlRequest.request);
            if(!response) {
                console.log("Server gave no response!");
                return;
            }
            if(response.ok) {
                switch(urlRequest.action){
                    case "getList":
                        const data = await response.json();
                        if(!data){
                            console.log("Failed to parse data");
                            return;
                        }
                        setState({
                            list:data
                        })
                        return;
                    case "add":
                    case "remove":
                    case "edit":
                        getList();
                        return;
                    default:
                        return;
                }
            }
            else {
                console.log("Server responded with a status"+response.status+" "+response.statusText);
            }
        }

        fetchData();

    }, [urlRequest]);


    const getList = () => {
        setUrlRequest({
            url:"/api/shopping",
            request:{
                "method":"GET"
            },
            action:"getList"
        })
    }

    const addItem = (item) => {
        setUrlRequest({
            url:"/api/shopping",
            request:{
                "method":"POST",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body":JSON.stringify(item)
            },
            action:"add"
        })
    }

    const removeItem = (id) => {
        setUrlRequest({
            url:"/api/shopping/"+id,
            request:{
                "method":"DELETE"
            },
            action:"remove"
        })
    }

    const editItem = (item) => {
        setUrlRequest({
            url:"/api/shopping/"+item._id,
            request:{
                "method":"PUT",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body":JSON.stringify(item)
            },
            action:"edit"
        })
    }

    return {state,addItem,removeItem,editItem}
}

export default useAction;
