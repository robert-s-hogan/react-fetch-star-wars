import GithubLogo from './github-icon.png';

const Header: React.FC = () => {
  return (
    <header className="flex justify-end p-3 max-w-4xl lg:max-w-7xl mx-auto">
      <a
        href="https://github.com/robert-s-hogan/react-fetch-star-wars"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GithubLogo} alt="Github Logo" />
      </a>
    </header>
  );
};

export default Header;
