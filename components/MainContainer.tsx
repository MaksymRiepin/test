import Head from "next/head";
import Menu from "./Menu"

export const MainContainer = ({ children }) => {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
                    key="desc"
                />
                <title>Main page</title>
            </Head>
            <div className="navbar">
                <Menu href={'/'} text="Main" />
                <Menu href={'/users'} text="Users" />
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }
                `}
            </style>
        </>
    )
}

export default MainContainer;