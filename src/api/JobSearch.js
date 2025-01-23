import axios from 'axios';

export const getJSearchJobs = async () =>{
    const options = {
      method: 'GET',
      url: 'https://jsearch.p.rapidapi.com/search',
      params: {
        query: 'developer jobs in chicago',
        page: '1',
        num_pages: '1',
        country: 'us',
        date_posted: 'all'
      },
      headers: {
        'x-rapidapi-key': '0984cd9bf0mshbf51ef1834dae33p101864jsnb1f5807c63e9',
        'x-rapidapi-host': 'jsearch.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export const getJobsApi = async () => {
    const options = {
    method: 'GET',
    url: 'https://jobs-api14.p.rapidapi.com/v2/list',
    params: {
        query: 'Web Developer',
        location: 'United States',
        autoTranslateLocation: 'true',
        remoteOnly: 'false',
        employmentTypes: 'fulltime;parttime;intern;contractor'
    },
    headers: {
        'x-rapidapi-key': '0984cd9bf0mshbf51ef1834dae33p101864jsnb1f5807c63e9',
        'x-rapidapi-host': 'jobs-api14.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
