import { useRouter } from "next/router"
import MainContainer from "../../components/MainContainer"

export default function User({ user }) {
    const router = useRouter();

    return (
        <MainContainer>
            <h1>User with id {user.id}</h1>
            <div>Server data rendering for <b>{user.name}</b></div>
        </MainContainer>
    )
}

export async function getServerSideProps(context) {
    console.log(context)

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
    const user = await response.json()
    return {
        props: { user },
    }
}