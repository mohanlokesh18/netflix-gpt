import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Groq } from "groq-sdk";

// Disable SSL cert validation (dev only)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

dotenv.config({ path: "../.env" });

const app = express();
app.use(express.json());

// Enable CORS only for your frontend
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.post("/api/groq-search", async (req, res) => {
  const { query } = req.body;

  const prompt = `You are a Movie Recommendation engine result should be based on IMDB. Suggest 5 movie titles and overview of each movie for this request: "${query}". Reply in comma-separated format only. Example: You are a Movie Recommendation engine result should be based on IMDB. first greet the user and then Suggest 5 movie titles and overview of each movie for this request: "${query}". Reply in comma-separated format only. Example: Vikram, Kaithi, Pushpa, KGF, RRR`;

  try {
    const chatCompletion = await groq.chat.completions.create({
      model: "meta-llama/llama-4-scout-17b-16e-instruct",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.9,
      max_tokens: 256,
    });

    const result = chatCompletion.choices[0]?.message?.content;
    res.json({ reply: result });
  } catch (err) {
    console.error("❌ Groq API Error:", err);
    res.status(500).json({ error: "Groq API error" });
  }
});

app.listen(5000, () =>
  console.log("✅ Server running on http://localhost:5000")
);
