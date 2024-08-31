export const revalidate = 60
 
export async function GET() {
  let data = await fetch('https://cn.bing.com')
  let posts = await data.text()
 
  return new Response(posts, {
    status: 200
  });
}