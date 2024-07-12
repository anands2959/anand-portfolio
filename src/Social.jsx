import "boxicons";
import "./style.css"
function Social() {
  return (
    <>
      <div className="Social-link">
        <a href="https://github.com/anands2959" target="_blank">
          <box-icon name="github" type="logo" color="#fff" size="lg"></box-icon>
        </a>
        <a href="https://www.linkedin.com/in/anand-kumar-sharma-ab9837216/" target="_blank">
          <box-icon
            type="logo"
            name="linkedin"
            color="#fff"
            size="lg"
          ></box-icon>
        </a>
      </div>
    </>
  );
}

export default Social;
