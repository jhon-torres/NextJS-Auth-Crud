export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard/:path*", "/otra-ruta/:path*"] }