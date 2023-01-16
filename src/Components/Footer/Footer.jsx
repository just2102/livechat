import { GithubFilled } from "@ant-design/icons";

const Footer = (props) => {
    const logg = () => {
        console.log('logg')
    }
  return (
    <footer className="footer">
      <a href="https://github.com/just2102"><GithubFilled></GithubFilled></a>
    </footer>
  );
};

export default Footer;
