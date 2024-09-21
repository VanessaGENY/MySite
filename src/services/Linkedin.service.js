import React from "react";
import { LINKEDIN_AUTH_API } from "../shared/global";

const LinkedinService = () => {
  const oauth_token = process.env.REACT_APP_LINKEDIN_TOKEN;
  const clientID = process.env.REACT_APP_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

  /*   const [token, setToken] = React.useState("");
  const [data, setData] = React.useState({}); */

  const getAccessToken = () => {
    const url = `${LINKEDIN_AUTH_API}/accessToken`;
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      grant_type: "authorization_code",
      code: oauth_token,
      client_id: clientID,
      client_secret: clientSecret,
      redirect_uri: process.env.REACT_APP_LINKEDIN_REDIRECT_URL,
    };
    fetch(url, {
      method: "POST",
      headers: headers,
    }).then((res) => {
      console.log(res);
    });
  };

  React.useEffect(() => {
    getAccessToken();
  });
};

export default LinkedinService;
