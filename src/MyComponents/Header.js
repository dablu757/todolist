import React from "react";
import PropTypes from "prop-types";

// Default values for props if none are passed
const defaultHeaderProps = {
  title: "My Todo List",
  searchBar: false,
};

function Header(props) {
  // Merge default props with the ones actually passed in
  const { title, searchBar } = { ...defaultHeaderProps, ...props };

//   console.log("Header rendered with title:", title);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Brand title */}
        <a className="navbar-brand" href="#">
          {title}
        </a>

        {/* Toggle button for responsive nav */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links and search bar */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
          </ul>

          {/* Conditional rendering of search bar */}
          {searchBar ? (
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired,
};

export default Header;














// import React from "react";
// import PropTypes from "prop-types";

// const defaultHeaderProps  = {
//     title : "My title here",
//     searchBar : true
// }

// function Header(props) {
//     const mergeProps = {...defaultHeaderProps, ...props}
//     const {
//         title,
//         searchBar
//     } = mergeProps

//   console.log("Header rendered with title:", title );
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             {title}
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">
//                   About
//                 </a>
//               </li>
//             </ul>
//             {searchBar ? (
//               <form className="d-flex" role="search">
//                 <input
//                   className="form-control me-2"
//                   type="search"
//                   placeholder="Search"
//                   aria-label="Search"
//                 />
//                 <button className="btn btn-outline-success" type="submit">
//                   Search
//                 </button>
//               </form>
//             ) : (
//               "no search basr"
//             )}
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// Header.propTypes = {
//   title: PropTypes.string,
//   searchBar: PropTypes.bool,
// };

// export default Header;
