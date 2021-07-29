import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { socialMediaMapped } from '../../utils/constants';
// import Link from 'next/link'
import styles from './styles.module.scss'

export default function SideMenu() {

    const router = useRouter()

    const handleClick = (socialMedia) => {
        window.open(socialMediaMapped[socialMedia], "_blank");
    }

    return (
        <div className={styles.sideMenuContainer}>

            <header>
               
            </header>
        
            <div className={styles.avatar}>
                <Image width={200} height={200} src={'/imagem-perfil.png'}
                        objectFit="fill" className={styles.sideMenuAvatar}
                        onClick={() => router.push("/")}
                /> 
            </div>
            <div className={styles.avatar}>
                <strong> Marco Túlio </strong>
            </div>
            <div className={styles.menuOptions}>
                <button className={styles.button} onClick={ () => router.push("/quemsoueu") }>
                Quem sou eu?
                </button>
                <button className={styles.button} onClick={ () => router.push("/experiencias") }>
                    Experiências
                </button>
                <button className={styles.button} onClick={ () => router.push("/blog") }>
                    Blog
                </button>
                <button className={styles.button} onClick={ () => router.push("/tecnologias") }>
                    Tecnologias
                </button>
            </div>
            <div className={styles.socialMedia}>
                <Image width={150} height={100} src={'/twitter.svg'}
                        objectFit="fill" className={styles.socialMediaHeaderIcons}
                        onClick={() => handleClick('twitter')}
                        alt="Twitter"
                /> 
                 <Image width={150} height={100} src={'/instagram.svg'}
                        objectFit="fill" className={styles.socialMediaHeaderIcons}
                        onClick={() => handleClick('instagram')}
                        alt="Instagram"
                /> 
                 <Image width={150} height={100} src={'/linkedin.svg'}
                        objectFit="fill" className={styles.socialMediaHeaderIcons}
                        onClick={() => handleClick('linkedin')}
                        alt="LinkedIn"
                /> 
                 <Image width={150} height={100} src={'/github.svg'}
                        objectFit="fill" className={styles.socialMediaHeaderIcons}
                        onClick={() => handleClick('github')}
                        alt="Github"
                /> 
      </div>
            <footer>
               
            </footer>
        </div >
    )
}