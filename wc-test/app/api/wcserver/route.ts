import { promises as fs } from "fs";
import { NextResponse } from "next/server";
export async function GET() {
  const fileContent = await fs.readFile("./dist/my-component.es.js", "utf-8");
  return new NextResponse(fileContent, {
    headers: {
      "Content-Type": "application/javascript",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
