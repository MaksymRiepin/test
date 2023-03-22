import Link from "next/link";

export default function Menu({ text, href }) {
    return (
        <>
            <Link href={href} legacyBehavior>
                <a className="link">{text}</a>
            </Link>
            <style jsx>{`
                .link {
                    text-decoration: none;
                    color: white;
                    font-size: 20px;
                    margin: 20px;
                }
                
            `}</style>
        </>
    )
}