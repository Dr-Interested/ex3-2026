export async function GET() {
  const baseUrl = "https://explore3.live";
  
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Explore 3 | Case Competition</title>
    <link>${baseUrl}</link>
    <description>A student-led case competition bridging the gap between education and real-world professional challenges in Law, Medicine, and Finance. Founded by Dr. Interested and Adil Mukhi.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${baseUrl}/favicon.ico</url>
      <title>Explore 3 Case Competition</title>
      <link>${baseUrl}</link>
    </image>
    
    <item>
      <title>Explore 3 Past Cases Archive (2025)</title>
      <link>${baseUrl}/past-cases</link>
      <guid isPermaLink="true">${baseUrl}/past-cases</guid>
      <description>Download the original case packages from the EX3 2025 competition. Cases include Pre-Medicine, Pre-Law, and Pre-Finance scenarios.</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <category>Cases</category>
    </item>

    <item>
      <title>Explore 3 Case Competition Announced</title>
      <link>${baseUrl}</link>
      <guid isPermaLink="true">${baseUrl}/#announcement</guid>
      <description>Get ready for the premier high school case competition for Law, Medicine, and Finance. Brought to you by Dr. Interested and Adil Mukhi.</description>
      <pubDate>${new Date('2025-01-01T00:00:00Z').toUTCString()}</pubDate>
      <category>News</category>
    </item>

  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
