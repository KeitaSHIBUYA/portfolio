import { NextRequest, NextResponse } from "next/server";
import ogs from "open-graph-scraper";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    const { result } = await ogs({ url });

    const ogpData = {
      title: result.ogTitle || result.twitterTitle || "",
      description: result.ogDescription || result.twitterDescription || "",
      image: result.ogImage?.[0]?.url || result.twitterImage?.[0]?.url || "",
      siteName: result.ogSiteName || "",
      url: result.ogUrl || url,
      favicon: result.favicon || "",
      publishedAt: result.articlePublishedTime || result.ogDate || "",
    };

    return NextResponse.json(ogpData);
  } catch (error) {
    console.error("OGP fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch OGP data" },
      { status: 500 }
    );
  }
}
