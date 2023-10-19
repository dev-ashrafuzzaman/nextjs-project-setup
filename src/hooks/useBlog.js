import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const useBlog = () => {
    const path = 'https://jsonplaceholder.typicode.com/posts'
    const { data = [], error, isLoading, isValidating, mutate } = useSWR(path, fetcher)

    return {
        data , error, isLoading, isValidating, mutate
    }
};

export default useBlog;