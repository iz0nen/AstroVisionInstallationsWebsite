export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

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
        subject: "New Job Application - Astro Vision Installations",
        html: `
          <h2>New Job Application</h2>
          <p><strong>Name:</strong> ${data.firstName || ""} ${data.lastName || ""}</p>
          <p><strong>Phone:</strong> ${data.phone || ""}</p>
          <p><strong>Email:</strong> ${data.email || ""}</p>
          <p><strong>City / State:</strong> ${data.cityState || ""}</p>
          <p><strong>Position / Work Interest:</strong> ${data.positionInterest || ""}</p>
          <p><strong>Years of Experience:</strong> ${data.yearsExperience || ""}</p>
          <p><strong>Availability / Start Date:</strong> ${data.availability || ""}</p>
          <p><strong>Available to Travel:</strong> ${data.travelAvailable || ""}</p>
          <p><strong>Reliable Transportation:</strong> ${data.transportation || ""}</p>
          <p><strong>Experience:</strong></p><p>${data.experience || ""}</p>
          <p><strong>Tools / Skills / Certifications / Notes:</strong></p><p>${data.toolsSkills || ""}</p>
          <p><strong>Resume / Portfolio Link:</strong> ${data.resumeLink || ""}</p>
        `,
        reply_to: data.email || "astrovisioninstallations@gmail.com",
      }),
    });

    const result = await response.json();
    if (!response.ok) return res.status(500).json(result);
    return res.status(200).json({ success: true, result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
