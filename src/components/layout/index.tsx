import './styles.scss'

export const Layout = ({ children }: React.PropsWithChildren) => {
    return (
        <main className="wrapper">
            <div className="layout">{children}</div>
        </main>
    )
}
