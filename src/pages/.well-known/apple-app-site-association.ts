import content from './_content.json'

export async function GET({params, request}) {
    return new Response(
      JSON.stringify(content)
    )
  }

