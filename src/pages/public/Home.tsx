import { useUser } from "reactfire"

const Home = () => {
    const {data: user} = useUser()

    console.log(user)

    return (
        <div>LOCURA</div>
    )

}

export default Home