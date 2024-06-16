import { useParams } from "react-router-dom";
import "../RedirectionStyle.css";
import { useEffect } from "react";

function Redirectionpage() {
  let params = useParams();

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      let get_params_data = params;
      let prod_url = `https://snip-1.onrender.com/api/getOriginalUrl/${get_params_data.redirection_id}`;
      let dev_url = `http://localhost:4005/api/getOriginalUrl/${get_params_data.redirection_id}`;

      try {
        let get_original_url = await fetch(prod_url);
        let _data = await get_original_url.json();

        if (_data.original_link) {
          let parse_url_link = _data.original_link.split("://");
          setTimeout(() => {
            window.location.href = `https://${parse_url_link[1]}`;
          }, 3000); // Redirect after 3 seconds
        }
      } catch (error) {
        console.error("Failed to fetch the original URL", error);
      }
    };

    fetchOriginalUrl();
  }, [params]);

  return (
    <div className="redirectionContainer">
      <h2 className="redirection_txt">
        Please Wait...
        While You Are Being Redirected
      </h2>
    </div>
  );
}

export default Redirectionpage;
