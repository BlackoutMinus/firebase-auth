import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useAuth } from 'reactfire'

const RegisterPage = () => {

  const auth = useAuth()

  const handleClickGoogle = async () => {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.log("Error signing in with Google:", error);
    }
    console.log("LETS GO")
  }
  
  return (
    <div>
      <h1>Registro</h1>
      <button onClick={handleClickGoogle}>Sign in Google</button>
    </div>
  )
}

export default RegisterPage