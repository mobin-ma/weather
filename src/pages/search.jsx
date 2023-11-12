import React, { Suspense } from 'react'
import Weather from '../components/weather'
import { KEY, httpInterceptedService } from '../core/http-service'
import { Await, defer, useLoaderData } from "react-router-dom";
import Loading from '../components/loading';

const Search = () => {
    const data = useLoaderData();

    return (
        <div className='w-full flex items-center justify-center'>
            <Suspense
                fallback={<Loading />}
            >
                <Await resolve={data.weatherLocation}>
                    {(loadedWeather) => <Weather weather={loadedWeather} />}
                </Await>
            </Suspense>
        </div>
    )
}

export default Search

//Requesting api and getting data
export async function weatherLoader({ params }) {
    return defer({
        weatherLocation: loadWeather(params),
    });

}

const loadWeather = async (params) => {
    const url = `/forecast.json?q=${params.q}&days=7&key=${KEY}`
    const response = await httpInterceptedService.get(url);
    return response;
}