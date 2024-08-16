import { useEffect, useState } from 'react';
import { getCountries } from '../api/countries';

export default function useCountries() {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [filterName, setFilterName] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCountries();
    }, []);

    useEffect(() => {
        handleFilterChange();
    }, [filterName]);

    const fetchCountries = async () => {
        try {
            const response = await getCountries();
            setCountries(response.data);
            setFilteredCountries(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    const handleFilterChange = () => {
        const filtered = countries.filter(x => (x.name.toLowerCase()).includes(filterName.toLowerCase()));
        setFilteredCountries(filtered);
    };

    const handleOnBack = () => {
        setFilteredCountries(countries);
    };

    return {
        countries,
        filteredCountries,
        setFilterName,
        handleOnBack,
        loading
    };

}