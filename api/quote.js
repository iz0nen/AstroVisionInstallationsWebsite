export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const data = req.body;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Astro Vision Website <onboarding@resend.dev>",
        to: ["astrovisioninstallations@gmail.com"],
        subject: "New Quote Request",
        html: `
          <h2>New Quote Request</h2>

          <p><strong>Company:</strong> ${data.company || ""}</p>
          <p><strong>Name:</strong> ${data.name || ""}</p>
          <p><strong>Phone:</strong> ${data.phone || ""}</p>
          <p><strong>Email:</strong> ${data.email || ""}</p>
          <p><strong>Location:</strong> ${data.location || ""}</p>
          <p><strong>Project Type:</strong> ${data.projectType || ""}</p>
          <p><strong>Start Date:</strong> ${data.startDate || ""}</p>
          <p><strong>Deadline:</strong> ${data.deadline || ""}</p>
          <p><strong>Description:</strong></p>
          <p>${data.description || ""}</p>
          <p><strong>Notes:</strong></p>
          <p>${data.notes || ""}</p>
        `,
      }),
    });

    const result = await response.json();

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}
