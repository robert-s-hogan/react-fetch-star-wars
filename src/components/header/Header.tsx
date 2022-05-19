import GithubLogo from './github-icon.png';
import "./header.css";

const Header: React.FC = () => {
    return (
        <header>
            <a href="https://github.com/robert-s-hogan/react-query-pagination-assessment">
                <img src={GithubLogo} alt="Github Logo" />
            </a>
        </header>
    )
}

export default Header;