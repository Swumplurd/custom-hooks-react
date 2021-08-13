import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {
    const isMounted = useRef(true)

    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])
    
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    })

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data: data
                    })
                } else {
                    console.log('setState no se llamo')
                }
            })
    }, [url])

    return state;
}
