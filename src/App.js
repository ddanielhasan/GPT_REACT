import React, { useEffect } from "react";
import "./styles.css";

function App() {
  useEffect(() => {
    alert('Neta Will You Be My Partner? One More Time?');
  }, []); // The empty array ensures this runs only once, on mount.

  return (
    <div>
      <header>
        <div className="container">
          <h1>Job Board</h1>
          <nav>
            <ul>
              <li><a >Home</a></li>
              <li><a >Jobs</a></li>
              <li><a >Login</a></li>
              <li><a >Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="container">
          <section className="search">
            <input type="text" placeholder="Search for jobs..." />
            <button>Search</button>
          </section>

          <section className="filters">
            <h2>Filter by:</h2>
            <select>
              <option value="location">Location</option>
              <option value="company">Company</option>
              <option value="type">Job Type</option>
            </select>
          </section>

          <section className="job-listings">
            <h2>Job Listings</h2>
            <ul>
              <li>
                <h3>Software Developer</h3>
                <p>Company: Tech Solutions</p>
                <p>Location: New York, NY</p>
                <button>Apply</button>
              </li>
              <li>
                <h3>Graphic Designer</h3>
                <p>Company: Creative Inc.</p>
                <p>Location: Los Angeles, CA</p>
                <button>Apply</button>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 Job Board. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
