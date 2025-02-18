import { useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function AuxComponent (){
useEffect(()=>{
    const db = getFirestore();
    const prodRef = doc(db,"Items","If3yIMipU0zw54q5NARM");
    getDoc(prodRef).then((snapshot)=>{
        if(snapshot.exists()){
            console.log({id:snapshot.id,... snapshot.data()});
            
        }
    })
},[])

return <div>AuxCompnent</div>
}

export default AuxComponent;