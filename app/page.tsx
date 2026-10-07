"use client"

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import infoCards from './libs/InfoCards'
import { CheckCheck, LucideIcon } from 'lucide-react'
import { ReactElement } from 'react'
import pricingCards from './libs/PricingCards'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className='flex min-h-screen h-fit flex-col items-center justify-center relative bg-black text-white'>
      <Navbar />
      <section id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden">
        <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-black md:text-8xl text-white'>Insightful</h1>
            <p className='text-md md:text-2xl font-semibold text-fuchsia-400'>Start growing today!</p>
          </div>
          <p className='max-w-md text-sm md:text-base text-zinc-300'>Insightful is an AI-powered sales optimization tool that provides data-driven insights to boost sales performance.</p>
          <div className='w-full flex items-center justify-center md:justify-start gap-4'>
            <button type="button" className='w-48 h-12 text-sm sm:text-base rounded bg-white text-black font-semibold hover:bg-fuchsia-600 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-fuchsia-400 focus-visible:outline-none'>Try 7 days free!</button>
            <button type="button" className='w-48 h-12 text-sm sm:text-base rounded border border-zinc-700 font-semibold text-white hover:bg-zinc-800 transition-colors focus-visible:ring-2 focus-visible:ring-fuchsia-400 focus-visible:outline-none'>Contact</button>
          </div>
        </div>

        <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10' aria-hidden="true">
          <Spline className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start" scene='https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode'/>
        </div>
      </section>

      <section id="about" className="h-fit min-h-screen w-full flex relative items-center justify-center p-8">
        <div className='absolute -z-10 h-full w-full overflow-hidden' aria-hidden="true">
          <Image src="/whirl.svg" fill className="absolute object-cover w-full overflow-visible sm:rotate-90 opacity-40" alt="" />
        </div>
        <div className="w-full h-full flex items-center justify-center flex-col gap-8 max-w-7xl">
          <h2 className='text-4xl md:text-5xl font-bold text-white'>No More Time Wasted!</h2>
          <div className="w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-between relative">
            {infoCards.map((infoCard) => {
              return (
                <InfoCard key={infoCard.id} Icon={infoCard.icon} title={infoCard.title}>
                  <p className="text-sm sm:text-base text-center md:text-left text-zinc-200">{infoCard.bodyText}</p>
                </InfoCard>
              )
            })}
          </div>
        </div>
      </section>

      <section id="pricing" className="h-fit min-h-screen w-full flex flex-col items-center justify-center gap-8 p-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Pricing</h2>
        <div className='grid grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 items-center h-fit w-full max-w-3xl gap-8'>
            {pricingCards.map((pricingCard) => {
              return (
                <PricingCard oneliner={pricingCard.oneliner} title={pricingCard.title} price={pricingCard.price} benefits={pricingCard.benefits} key={pricingCard.id}/>
              )
            })}
        </div>
      </section>
    </main>
  )
}

interface IInfoCardProps {
  title: string;
  Icon: LucideIcon;
  children: ReactElement<any, any>
}

function InfoCard({title, Icon, children}: IInfoCardProps) {
  return (
    <div className='w-full h-80 rounded-xl flex flex-col justify-around items-center p-8 bg-zinc-900 border border-zinc-800 shadow-lg text-white'>
      <div className="p-4 bg-fuchsia-700 rounded-full text-white">
        <Icon aria-hidden="true" />
      </div>
      <div>
        <h3 className='text-lg font-bold sm:text-xl text-white'>{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  )
}

interface IPricingCardProps {
  title: string;
  price: number;
  benefits: string[];
  oneliner: string;
}

function PricingCard({title, price, benefits, oneliner}: IPricingCardProps) {
  return (
    <div className='h-fit w-full rounded-xl flex flex-col p-8 gap-8 bg-zinc-900 border border-zinc-800 shadow-lg text-white'>
      <div className='flex flex-col gap-2'>
        <div>
          <h3 className='text-2xl font-bold text-white'>{title}</h3>
          <p className='text-sm text-zinc-300'>{oneliner}</p>
        </div>
        <p className='text-4xl font-bold text-white'>
          ${price} <span className='text-sm font-normal text-zinc-300'>/ Month</span>
        </p>
      </div>
      <button type="button" className='bg-fuchsia-700 rounded p-2 text-sm font-semibold text-white transition-colors hover:bg-fuchsia-800 focus-visible:ring-2 focus-visible:ring-fuchsia-400 focus-visible:outline-none'>Try 7 days free!</button>
      <div className='flex flex-col w-full gap-4'>
        {benefits.map((benefit, i) => {
          return(
            <p key={i} className='text-sm text-zinc-200 flex items-center gap-2'>
              <span className='text-fuchsia-400'>
                <CheckCheck aria-hidden="true" className="w-4 h-4" />
              </span>
              {benefit}
            </p>
          )
        })}
      </div>
    </div>
  )
}

function Navbar() {
  return (
    <header className='w-full h-16 border-b border-zinc-800 flex items-center justify-center sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md text-white'>
      <div className='max-w-7xl w-full flex items-center justify-between p-4'>
        <span className='font-bold text-lg text-white'>Insightful</span>
        <nav aria-label="Main Navigation">
          <ul className='flex gap-8'>
            <li>
              <Link className='text-zinc-200 hover:text-fuchsia-400 transition-colors text-xs sm:text-base focus-visible:ring-2 focus-visible:ring-fuchsia-400 focus-visible:outline-none rounded px-2 py-1' href="#home">
                Home
              </Link>
            </li>
            <li>
              <Link className='text-zinc-200 hover:text-fuchsia-400 transition-colors text-xs sm:text-base focus-visible:ring-2 focus-visible:ring-fuchsia-400 focus-visible:outline-none rounded px-2 py-1' href="#about">
                About
              </Link>
            </li>
            <li>
              <Link className='text-zinc-200 hover:text-fuchsia-400 transition-colors text-xs sm:text-base focus-visible:ring-2 focus-visible:ring-fuchsia-400 focus-visible:outline-none rounded px-2 py-1' href="#pricing">
                Pricing
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}