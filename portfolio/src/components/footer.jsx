import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="d-flex flex-column justify-content-center footer">
        <div>
          <h3 className="footer-title">Aditya Sinha</h3>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/aditya-s-a07a54121/">
            <i class="fab fa-linkedin p-3"></i>
          </a>
          <a href="https://github.com/BREACH1247">
            <i class="fab fa-github p-3"></i>
          </a>
          <a href="https://stackoverflow.com/users/14740229/godspeed69?tab=profile">
            <i class="fab fa-stack-overflow p-3"></i>
          </a>
          <a href="mailto:sinhaditya50@gmail.com.com">
            <i class="fas fa-envelope p-3"></i>
          </a>
          <a href="https://www.hackerrank.com/sinhaditya50">
            <i class="fab fa-hackerrank p-3"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;