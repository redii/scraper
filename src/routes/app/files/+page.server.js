import prisma from "$lib/utils/prisma"

/** @type {import('./$types').PageLoad} */
export async function load() {
	const files = await prisma.file.findMany({
		orderBy: { id: "desc" },
		include: { job: true },
		take: 10
	})
	return { files }
}
