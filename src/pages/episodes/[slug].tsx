import { format, parseISO } from 'date-fns'
import next, { GetStaticPaths, GetStaticProps } from 'next'
// import { api } from '../../services/api'
import { convertDurationToTimeString } from '../../utils/convertDuration'
import ptBR from 'date-fns/locale/pt-BR'
import styles from '../episodes/episode.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { usePlayer } from '../../store/PlayerContext'
import Head from 'next/head'
import { episodesGroup } from '../../constants/episodesGroup'

type Episode = {
    id: string
    title: string
    thumbnail: string
    description: string
    members: string
    duration: number
    durationAsString: string
    url: string
    publishedAt: string
}

type EpisodeProps = {
    episode: Episode
}

export default function Episode({ episode }: EpisodeProps) {

    // Este trecho verifica se está em carregamento ou não, retornando 
    // um componente de Loading da página 
    // Necessário somente no Fallback true (Gerado pelo Client)
    const router = useRouter()
    if (router.isFallback) {
        return <p> Carregando... </p>
    }

    const { play } = usePlayer()

    return (
        <div className={styles.episode}>
            <Head>
                <title> {episode.title} </title>
            </Head>

            <div className={styles.thumbnailContainer}>
                <Link href="/">
                    <button type="button">
                        <img src="/arrow-left.svg" alt="Voltar" />
                    </button>
                </Link>

                <Image
                    width={700}
                    height={160}
                    src={episode.thumbnail}
                    objectFit="cover"
                />
                <button type="button" onClick={() => play(episode)}>
                    <img src="/play.svg" alt="Tocar Episódio" />
                </button>
            </div>

            <header>
                <h1> {episode.title} </h1>
                <span> {episode.members} </span>
                <span> {episode.publishedAt} </span>
                <span> {episode.durationAsString} </span>
            </header>

            <div className={styles.description} dangerouslySetInnerHTML={{ __html: episode.description }} />
        </div>
    )
}

// client (Browser) -> next.js (node.js) -> server (back-end)

export const getStaticPaths: GetStaticPaths = async () => {
    // const { data } = await api.get('episodes', {
    //     params: {
    //         _limit: 2,
    //         _sort: 'published_at',
    //         _order: 'desc'
    //     }
    // })

    const paths = episodesGroup.map(episode => {
        return {
            params: {
                slug: episode.id
            }
        }
    })

    return {
        paths: paths,
        fallback: 'blocking'

        // Ao passar um array de paths todos objetos são carregados 
        // estaticamente no build 
        // paths : paths

        // Declarando o paths na forma abaixo, todos episódios são carregados 
        // de forma dinâmica, nenhum será pré-carregado de forma estática
        // paths: []

        // Declarando Paths conforme o jeito abaixo somente os episódios passados
        // serão carregados estaticamente no momento do build.
        // paths: [
        //     {
        //         params: {
        //             slug: 'a-importancia-da-contribuicao-em-open-source'
        //         }
        //     }], // Quando vazio não gera de forma estática nenhum episódio

        // fallback BLOCKING (Next 10 - Roda na camada NEXT.JS)
        // Quando a pessoa clicar no link a pessoa só será navegada quando tiver 
        // os dados carregados (Melhor opção para SEO) 
        // Incremental Static Regeneration

        // fallback false (NEXT.JS - Node)
        // não vai carregar estatico se não tiver os paths das páginas estáticas 
        // Incremental Static Regeneration

        // fallback true (CLIENT)
        // se a pessoa acessar o episódio que não foi gerado estaticamente, o 
        // fallback tentará buscar esse episódio dinamicamente mas pelo lado 
        // do Client
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { slug } = ctx.params
    // const { data } = await api.get(`/episodes/${slug}`)
    const data = episodesGroup.find( e => e.id === slug) 
    const episode = {
        id: data.id,
        title: data.title,
        thumbnail: data.thumbnail,
        members: data.members,
        publishedAt: format(parseISO(data.published_at), 'd MMM yy', { locale: ptBR }),
        duration: Number(data.file.duration),
        durationAsString: convertDurationToTimeString(Number(data.file.duration)),
        description: data.description,
        url: data.file.url
    }

    return {
        props: {
            episode: episode
        },
        revalidate: 60 * 60 * 24 // 24 horas
    }
}