import axios from "axios";

const GET = async (req, res) => {
  const url = new URL(req.url);
  const pdfLink = url.searchParams.get("pdfLink");
  console.log("pdfLink", pdfLink);
  const pdfResponse = await axios.get("http://localhost:3001/pdf", {
    responseType: "arraybuffer",
  });
  const buffer = Buffer.from(pdfResponse.data);

  return new Response(buffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
    },
  });
};

export { GET };
