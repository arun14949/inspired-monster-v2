import axios from "axios";

export const sendMail = async (name, phoneOrEmail, project, projectDesc) =>
  await axios.post(
    "https://us-central1-inspiredmonster-dev.cloudfunctions.net/sendContactEmail/",
    {
      name,
      phoneOrEmail,
      project,
      projectDesc,
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
