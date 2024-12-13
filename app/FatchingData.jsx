export default async function FatchingData() {
	const data = await fetch("https://v2.jokeapi.dev/joke/Any", {
		next: {
			revalidate: 0,
		},
	});

	if (!data.ok) {
		throw new Error("Fetch Error...");
	}
	return data.json();
}
