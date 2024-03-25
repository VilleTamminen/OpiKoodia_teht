import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//ohjataan kaikki liikenne backendiin. Tätä ei tehdä oikeassa productiossa.
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy:{
            "/api":{
                target:"http://localhost:3000",
                changeOrigin:true,
                secure:false
            }
        }
    }
})
