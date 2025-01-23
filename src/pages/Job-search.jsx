import React, { useEffect, useState } from 'react';
import { getJSearchJobs, getJobsApi } from '../api/JobSearch';

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    remote: false,
    fullTime: false,
    partTime: false,
    contract: false,
  });

  const jobs = [
    { id: 1, title: 'Frontend Developer', company: 'Tech Corp', location: 'Remote', type: 'Full-Time' },
    { id: 2, title: 'Backend Engineer', company: 'DevWorks', location: 'San Francisco', type: 'Contract' },
    { id: 3, title: 'UI/UX Designer', company: 'DesignCo', location: 'Remote', type: 'Part-Time' },
    { id: 4, title: 'DevOps Engineer', company: 'Cloudify', location: 'New York', type: 'Full-Time' },
  ];

  useEffect(() => {
    getJSearchJobs();
    getJobsApi();
  }, [])

  // Filter jobs based on search term and active filters
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilters =
      (!filters.remote || job.location === 'Remote') &&
      (!filters.fullTime || job.type === 'Full-Time') &&
      (!filters.partTime || job.type === 'Part-Time') &&
      (!filters.contract || job.type === 'Contract');

    return matchesSearch && matchesFilters;
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (filterName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  return (
    <section className="job__search">
      {/* Search Section */}
      <div className="search__section">
        <input
          type="text"
          className="search__input"
          placeholder="Search for jobs, titles, or companies..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="search__button">Search</button>
      </div>

      {/* Job Listings and Filters Section */}
      <div className="job__section">
        {/* Job Listings */}
        <div className="job__listings">
          <h2 className="section__title">Job Listings</h2>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div className="job__card" key={job.id}>
                <h3>{job.title}</h3>
                <p>Company: {job.company}</p>
                <p>Location: {job.location}</p>
                <p>Type: {job.type}</p>
                <button className="apply__button">Apply Now</button>
              </div>
            ))
          ) : (
            <p>No jobs found. Adjust your search or filters.</p>
          )}
        </div>

        {/* Filters */}
        <div className="job__filters">
          <h2 className="section__title">Filters</h2>
          <div className="filter__options">
            <label>
              <input
                type="checkbox"
                checked={filters.remote}
                onChange={() => handleFilterChange('remote')}
              />{' '}
              Remote Jobs
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.fullTime}
                onChange={() => handleFilterChange('fullTime')}
              />{' '}
              Full-Time
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.partTime}
                onChange={() => handleFilterChange('partTime')}
              />{' '}
              Part-Time
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.contract}
                onChange={() => handleFilterChange('contract')}
              />{' '}
              Contract
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearch;
