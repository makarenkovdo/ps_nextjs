import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CommonHelmet } from '../app/CommonHelmet'
import { MainTemplate } from '../shared/components/templates/mainTemplate/MainTemplate'
import { AppTemplate } from '../app/AppTemplate'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CommonHelmet />
      <AppTemplate>
        <Component {...pageProps} />
      </AppTemplate>
    </>
  )
}
