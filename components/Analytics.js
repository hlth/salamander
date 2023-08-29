import Script from 'next/script'

export default function Analytics() {
    return (
      <div>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G_HEKGKK83N8" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
   
            gtag('config', 'G-HEKGKK83N8');
          `}
        </Script>
      </div>
    )
  }
   