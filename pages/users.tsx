import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
    return (
        <MainContainer>
            <h1>Users list:</h1>
            <ul>
                {users.map(c =>
                    <li key={c.id}>
                        <Link href={`/users/${c.id}`}>{c.name}</Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    )
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()

    return {
        props: { users },
    }
}