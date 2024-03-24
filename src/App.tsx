import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  console.log({ user });

  return (
    <div className="App">
      <div className="banner">
        {isLoading && <h1>Loading ...</h1>}
        {!isAuthenticated ? (
          <div>
            <button className="button" onClick={() => loginWithRedirect()}>
              Log In
            </button>
          </div>
        ) : (
          <div className="container ">
            <div className="card">
              <img src={user?.picture} alt={user?.name} />
              <h2>{user?.name}</h2>
              <p>{user?.email}</p>
              <button
                className="button"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
