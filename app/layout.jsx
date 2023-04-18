import './globals.css'
import {Poppins} from 'next/font/google'
import Header from './components/Header';


export const metadata = {
  title: 'Rolex Online Courses',
  description: 'Web development courses',
  keywords: 'Web development, web design, javascript, react, css'
}

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className='container'>
          {children}
        </main>
</body>
    </html>
  )
}
