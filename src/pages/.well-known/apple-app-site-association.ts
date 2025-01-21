import applinks from './_applinks.json'

export async function GET({ params, request }) {
  return new Response(
    JSON.stringify(applinks)
  )
}

