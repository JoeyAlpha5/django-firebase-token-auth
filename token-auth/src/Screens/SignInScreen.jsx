import { firebase } from "../Firebase/Firebase";


const SignInScreen = ()=>{
    const signIn = ()=>{
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then( async (result)=>{
            // user is signed in
        })

    }

    return(
        <div style={ContainerStyle}>
            <button style={ButtonStyle} onClick={signIn}>
                Sign in
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
    backgroundColor:'#282A36'
}

const ButtonStyle ={
    width:200,
    height:40,
    cursor:'pointer',
    border:0,
    borderRadius:10,

}

export default SignInScreen