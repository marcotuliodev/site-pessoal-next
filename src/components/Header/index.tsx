import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './styles.module.scss'

export default function Header() {

    const router = useRouter()
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR
    })

    return (
        <header className={styles.headerContainer}>
            <Image width={75} height={75} src={'/blog-icon.png'}
                    objectFit="fill" className={styles.sideMenuAvatar} onClick={() => router.push("/") }/>
            <p> Elucubrações Dev </p>
            <span> {currentDate} </span>
        </header>
    )
}