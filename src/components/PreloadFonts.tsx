import * as React from 'react'
import { Helmet } from 'react-helmet';

interface Props {
    fonts: string[]
}

const PreloadFonts = ({ fonts }: Props) => (
    <Helmet>
        {fonts.map(font => (
            <link
                key={font}
                rel="preload"
                href={font}
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />
        ))}
    </Helmet>
)

export default PreloadFonts
