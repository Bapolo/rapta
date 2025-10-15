interface FooterProps {
    setMenuActivo: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Footer({setMenuActivo}: FooterProps) {
    return (
        <footer className="bg-[#F1F5F9] p-4 flex justify-center items-center text-[#000]" onClick={() => setMenuActivo(false)}>
            <p>&copy; copyright Bapolo Estúdio | 2025</p>
        </footer>
    )
}