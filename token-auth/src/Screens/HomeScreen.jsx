import { authentication } from "../Firebase/Firebase"
const HomeScreen = ()=>{
    // log out
    const logout = ()=>{
        authentication.signOut();
    }

    const getData = ()=>{
        authentication.onAuthStateChanged( async (user)=>{
            if(user){
                let token = await user.getIdToken();
                fetch('http://127.0.0.1:8000/getData/',{
                    headers:{
                        "Authorization":`Bearer ${token}`
                    }
                })
                .then((response)=>response.json())
                .then((JsonResponse)=>{
                    console.log(JsonResponse);
                })
            }
        })
    }

    return(
        <div style={ContainerStyle}>
            <button style={ButtonStyle} onClick={getData}>
                Get data
            </button>
            <button style={ButtonLogOutStyle} onClick={logout}>
                Log out
            </button>
        </div>
    ) 
 }
 

 const ContainerStyle={
    width:'100%',
    height:'100%',
    position:'absolute',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    backgroundColor:'#282A36',
    color:'white',
}

const ButtonStyle ={
    width:200,
    height:40,
    cursor:'pointer',
    border:0,
    borderRadius:10,
}

const ButtonLogOutStyle = {
    width:200,
    height:40,
    cursor:'pointer',
    border:0,
    borderRadius:10,
    marginTop:20,
    backgroundColor:'#FF5555',
    color:'white'
}
 export default HomeScreen