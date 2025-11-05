/**
 * This is an example API application with very simple responses to http requests on port 8080
 * Start the application using `node api.mjs`
 */

import * as http from "node:http"
import { bravo } from "@nx-cache/bravo"

const port = 8088

http
	.createServer(async (_, res) => {
		res.writeHead(200, {
			"Content-Type": "text/plain",
			"access-control-allow-origin": "*",
			"access-control-allow-methods": "GET, OPTIONS"
		})
		res.write(`Hello world @ ${new Date().toISOString()}
From libs: ${bravo("Hello from API")}`)
		res.end()
	})
	.listen(port)

console.log(`http://localhost:${port}`)
