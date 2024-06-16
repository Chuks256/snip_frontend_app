import { useParams } from "react-router-dom";
import "../RedirectionStyle.css";
import { useEffect } from "react";

function Redirectionpage() {
  let params = useParams();

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      let get_params_data = params;
      let prod_url = `https://snip-1.onrender.com/api/getOriginalUrl/${get_params_data.redirection_id}`;
      // let dev_url = `http://localhost:4005/api/getOriginalUrl/${get_params_data.redirection_id}`;

      // i tried to improved the parsing of url and i fixed the url problem
      try {
        let get_original_url = await fetch(prod_url);
        let _data = await get_original_url.json();
        if (_data.original_link) {
          let global_data_url=_data.original_link;
          let _check_for_empty_header=global_data_url.split(".")
          if(_check_for_empty_header[0] != 'www'){
            setTimeout(() => {
              window.location.href = `https://${global_data_url}`;
            }, 1000); // Redirect after 1 seconds  
          }
          if(_check_for_empty_header[0]==="www"){
            let parse_url_link = _data.original_link.replace("www.","https://");
            setTimeout(() => {
              window.location.href = `${parse_url_link}`;
            }, 1000); // Redirect after 1 seconds
          }
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
        <br></br>This might take few seconds
      </h2>
    </div>
  );
}

export default Redirectionpage;
