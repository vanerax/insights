import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '123Next.js'

}

export default function Page() {
    console.log(123);
    return (
      <div>
        <section id="mainpage">
          <h1>Hello, Home page!</h1>
        </section>
        <section id="sidepage">
          
        </section>
      </div>
    )
}
