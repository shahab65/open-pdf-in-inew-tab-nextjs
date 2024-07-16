import axios from "axios";

const GET = async (req, res) => {
  const url = new URL(req.url);
  const pdfUrl = url.searchParams.get("pdfUrl");
  const pdfResponse = await axios.get(pdfUrl, {
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
