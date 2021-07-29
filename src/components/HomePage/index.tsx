import Image from 'next/image'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'
import { socialMediaMapped } from '../../utils/constants'

export default function HomePage() {

  const router = useRouter()

  const handleClick = (socialMedia) => {
      window.open(socialMediaMapped[socialMedia], "_blank");
  }

  return (
    <div className={styles.homeContainer}>
       <div className={styles.avatar}>
            <Image width={200} height={200} src={'/imagem-perfil.png'}
                    objectFit="fill" className={styles.sideMenuAvatar}
            /> 
      </div>
      <div className={styles.avatar}>
                <strong> Marco Túlio </strong>
      </div>
      <div className={styles.buttons}>
          <button  style={{
            cursor: 'pointer',
            padding: '10px',
            borderRadius: '5rem',
            border: '3px solid white',
            color: 'white',
            backgroundColor: 'transparent',            
            fontSize: '1.5rem',
            marginRight: '2rem',
            marginTop: '2rem'
      }} onClick={ () => router.push("/quemsoueu") }>
            Quem sou eu?
          </button>
          <button style={{
            cursor: 'pointer',
            padding: '10px',
            borderRadius: '5rem',
            border: '3px solid white',
            color: 'white',
            backgroundColor: 'transparent',            
            fontSize: '1.5rem',
            marginRight: '2rem',
            marginTop: '2rem', 
            width: '15rem',
      }} onClick={ () => router.push("/experiencias") }>
            Experiências
          </button>
          <button style={{
            cursor: 'pointer',
            padding: '10px',
            borderRadius: '5rem',
            border: '3px solid white',
            color: 'white',
            backgroundColor: 'transparent',            
            fontSize: '1.5rem',
            marginRight: '2rem',
            marginTop: '2rem', 
            width: '15rem',
      }} onClick={ () => router.push("/blog") }>
            Blog
          </button>
          <button style={{
            cursor: 'pointer',
            padding: '10px',
            borderRadius: '5rem',
            border: '3px solid white',
            color: 'white',
            backgroundColor: 'transparent',            
            fontSize: '1.5rem',
            marginRight: '2rem',
            marginTop: '2rem', 
            width: '15rem',
      }} onClick={ () => router.push("/tecnologias") }>
            Tecnologias
          </button>
      </div>
      <div className={styles.socialMedia}>
                <Image width={100} height={50} src={'/twitter.svg'}
                        objectFit="fill" className={styles.socialMediaHeaderIcons}
                        onClick={() => handleClick('twitter')}
                        alt="Twitter"
                /> 
                 <Image width={100} height={50} src={'/instagram.svg'}
                        objectFit="fill" className={styles.socialMediaHeaderIcons}
                        onClick={() => handleClick('instagram')}
                        alt="Instagram"
                /> 
                 <Image width={100} height={50} src={'/linkedin.svg'}
                        objectFit="fill" className={styles.socialMediaHeaderIcons}
                        onClick={() => handleClick('linkedin')}
                        alt="LinkedIn"
                /> 
                 <Image width={100} height={50} src={'/github.svg'}
                        objectFit="fill" className={styles.socialMediaHeaderIcons}
                        onClick={() => handleClick('github')}
                        alt="Github"
                /> 
      </div>
    </div>
  )
}
