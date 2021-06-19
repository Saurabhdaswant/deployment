const NavBar = () => {
  return (
    <div className="container navbar ">
      <h2 className="myfeed">My feed</h2>
      <div className="buttons">
        <button>Relevant</button>
        <button>Recent</button>
        <button>featured</button>
      </div>
    </div>
  );
};

export default NavBar;
