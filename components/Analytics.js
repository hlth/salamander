export default function Analytics() {
    return(
        <script dangerouslySetInnerHTML={{ __html:  `<!-- Google tag (gtag.js) --> 
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HEKGKK83N8"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-HEKGKK83N8');
        </script>`}}>
        </script>
)
}