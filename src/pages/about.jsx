import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  SpotifyIcon,
  DotCardsIcon
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Spencer Sharp</title>
        <meta
          name="description"
          content="I&aposm Spencer Sharp. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&aposm Spencer Bushman. I live in Lehi, UT, where I work on my dreams.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I am a lover of the arts. Sports, 
                literature, and music has driven his life from the very beginning, 
                much due to his parents love of similar passions.
              </p>
              <p>
                Spencer&aposs father enjoys sports and the pop/rock side of music and his mother enjoys 
                literature, writing and the classical side of music. From a very young age, 
                Spencer&aposs life has been influenced by music.
              </p>
              <p>
                With a presence in both his junior high and high school choirs, that love 
                of music has grown into a love of piano, which is one 
                of his favorite aspects of music, to composing and writing his own songs. 
                These passions have fueled his past, the present, and will affect his future.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://www.instagram.com/spencerbushmanmusic" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://www.facebook.com/spencer.bushman.7?mibextid=LQQJ4d" icon={FacebookIcon} className="mt-4">
                Follow on Facebook
              </SocialLink>
              <SocialLink href="https://www.youtube.com/channel/UCrbZwIuJ2dh15jE8u0hQ0IA/featured?app=desktop" icon={YoutubeIcon} className="mt-4">
                Follow on Youtube
              </SocialLink>
              <SocialLink href="https://open.spotify.com/artist/106BBSc5HF6FrPotolLEpp?si=xUZOQPciQXeb6_9tFz8nNA&nd=1" icon={SpotifyIcon} className="mt-4">
                Follow on Spotify
              </SocialLink>
              <SocialLink href="https://dot.cards/spencerbushmanmusic?a=user%2Fyxvlmcphiyuoxbfrf187f700f%2Fc%2Fb" icon={DotCardsIcon} className="mt-4">
                Follow on dot.
              </SocialLink>
              <SocialLink
                href="mailto:spencerbushmanmusic@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                spencerbushmanmusic@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
