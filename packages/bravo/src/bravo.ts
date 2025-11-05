import { charlie } from "@nx-cache/charlie"

export const bravo = (message: string) => {
	return charlie(`Outer wrap: ${message}`)
}
