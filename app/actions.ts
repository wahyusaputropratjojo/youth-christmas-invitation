"use server";

import { getBaseUrl } from "@/lib/utils";

export async function generateShortLink(
	previousState: unknown,
	formData: FormData,
) {
	const tujuan = formData.get("tujuan") as string;
	const rootURL = getBaseUrl();
	const originalLink = `${rootURL}/?to=${encodeURIComponent(tujuan)}`;

	try {
		const response = await fetch("https://api.tinyurl.com/create", {
			body: JSON.stringify({
				url: originalLink,
			}),
			headers: {
				Authorization: `Bearer ${process.env.TINYURL_TOKEN}`,
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		const result = await response.json();

		if (!response.ok) {
			const errorMessage = result.errors?.[0] || "Failed to create short link";
			console.error("TinyURL Error:", result);
			return { error: errorMessage };
		}

		return {
			fieldData: { tujuan },
			shortUrl: result.data.tiny_url,
		};
	} catch (error) {
		console.error("Server Action Error:", error);
		return { error: "Something went wrong. Please try again." };
	}
}
