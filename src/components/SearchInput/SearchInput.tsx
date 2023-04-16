import { useState, useRef, useEffect } from 'react'
import SearchHistory from '../SearchHistory/SearchHistory';

interface Props {
    handleSearchValue: (value: string) => void
    handleSearchHistory: (value: string) => void
}

const SearchInput: React.FC<Props> = ({ handleSearchValue, handleSearchHistory }) => {

    const [localValue, setLocalValue] = useState('')
    const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false)

    const searchHistoryRef = useRef<HTMLDivElement>(null)

    console.log(searchHistoryRef)

    useEffect(() => {

        const handleClickOutside = (event: MouseEvent) => {
            if (searchHistoryRef.current && !searchHistoryRef.current.contains(event.target as Node))
                setIsSearchFocused(false)
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleInputFocus = () => {
        setIsSearchFocused(true)
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (localValue === '') {
            return alert('field is empty')
        }
        handleSearchValue(localValue)
        handleSearchHistory(localValue)

    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalValue(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder='search'
                type="text"
                value={localValue}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
            />
            <button type='submit'>Search</button>

            {isSearchFocused && (
                <div ref={searchHistoryRef}>
                    <SearchHistory />
                </div>
            )}



        </form>
    )
};

export default SearchInput;