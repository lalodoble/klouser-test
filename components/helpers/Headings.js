export default function Heading(pageTitle = '', desc = '', image = '', url = '') {
    const lang = 'ES';
    const statics = [
        <meta charset="utf-8" />,
        <title>Klouser</title>,
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />,
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />,
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />,
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />,
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />,
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />,
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />,
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />,
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />,
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />,
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />,
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />,
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />,
        <meta name="msapplication-TileColor" content="#ffffff" />,
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />,
        <meta name="theme-color" content="#ffffff"></meta>,
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#ffffff" />,
        <meta name="msapplication-TileColor" content="#ffffff" />,
        <meta name="theme-color" content="#ffffff" />,

        <meta property="og:type" content="website" />,
        <meta name="author" content="Lalo Gold - www.lalogold.com" />,
        <meta name="copyright" content="Klouser Inc" />,
        <meta name="robots" content="index, follow" />,
        <meta name="keywords" content="" />,
    ]


    const description = {
        ES: 'En Klouser puedes crear tu propio negocio de membresías sin tener que preocuparte por la gestión de pagos, el soporte, ni las incidencias tecnológicas. Pudiendo lanzar en menos de 24 horas y todo esto, sin invertir un céntimo hasta no ver los resultados',
    };

    const locale = {
        EN: 'en_US',
        ES: 'es_AR',
        PT: 'pt_BR'
    };

    let title = 'Klouser';
    if (pageTitle) {
        title = title + ' de ' + pageTitle;
    }

    return (
        <>
            <title>{title}</title>
            <meta name="og:title" content={title} />
            <meta name="og:sitename" content="Klouser" />
            <meta name="description" content={desc || description[lang]} />
            <meta name="og:description" content={desc || description[lang]} />
            <meta name="lang" content={lang.toLowerCase()} />
            <meta name="og:locale" content={locale[lang]} />
            <meta name="og:url" content={"https://koluser.com" + url} />
            <link rel="image_src" href={image || null} />
            <meta name="og:image" content={image || null} />

            {statics}

            <script async src="https://www.googletagmanager.com/gtag/js?id=G-GZLYBZVSN5"></script>

            <script dangerouslySetInnerHTML={
                {
                    __html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-GZLYBZVSN5');`}
            }>
            </script>


        </>
    )
}