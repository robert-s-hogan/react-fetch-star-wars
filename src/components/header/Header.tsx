import GithubLogo from './github-icon.png';

const Header: React.FC = () => {
  return (
    <header className="flex justify-end p-3">
      <a href="https://github.com/robert-s-hogan/react-query-pagination-assessment">
        <img src={GithubLogo} alt="Github Logo" />
      </a>
    </header>
  );
};

export default Header;
