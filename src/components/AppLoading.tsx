import { useEffect } from 'react'
import NProgress from 'nprogress'
import { useRouter } from 'next/router'

export function AppLoading() {
    const router = useRouter()

    useEffect(() => {
        const handleStart = () => {
            NProgress.start()
        }
        const handleComplete = () => {
            NProgress.done()
        }

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    }, [router.events])

    return null
}
