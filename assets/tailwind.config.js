var baseURL = document.URL.substring(0, document.URL.length - 10);
var imageURL = baseURL + '/assets/hero-image.png';
var didotURL = baseURL + '/assets/didot_bold-webfont.woff';


// workaround to add Didot font
var newStyle = document.createElement('style');
newStyle.appendChild(document.createTextNode("\
@font-face {\
    font-family: " + 'Didot' + ";\
    src: url('" + baseURL + didotURL + "') format('woff');\
}\
"));

document.head.appendChild(newStyle);

tailwind.config = {
    theme: {
        extend: {
            backgroundImage: {
                'hero-woods': `linear-gradient(to left, transparent 71.4%, #611818 71.4%), url(${imageURL});`,
                'button': 'linear-gradient(90deg, #611818 0%, #A36754 100%)'
            },
            fontSize: {
                'title-d': ['224px', {
                    lineHeight: '224px',
                }],
                'title-t': ['150px', {
                    lineHeight: '150px',
                }],
                'title-m': ['75px', {
                    lineHeight: '75px',
                }],
                'subtitle': ['25px', {
                    fontWeight: '400',
                    lineHeight: '25px',
                    letterSpacing: '0.625px'
                }],
                'modal-title': ['66px', {
                    fontWeight: '700',
                    letterSpacing: '0px'
                }],
                'modal-blurb': ['18px', {
                    fontWeight: '400',
                    letterSpacing: '0.3499999940395355px',
                    lineHeight: '22px'

                }],
                'button-title': ['18px', {
                    fontWeight: '700',
                    letterSpacing: '1.69px'
                }]
            },
            fontFamily: {
                'lato': ['Lato'],
                'didot': ['Didot']
            },
            colors: {
                'primary': '#611818',
                'tcolor': '#282828'

            },
            padding: {
                'modal': '24px 24px 0px 67px',
                'modal-mobile': '24px 20px 0px 20px'
            },
            animation: {
                'c-bounce': 'custom-bounce 1s ease-in-out infinite',
                'title-vanish': 'vanish .35s ease-out',
                'title-return': 'return .35s ease-out',
                'md-appear': 'modal-desktop-appear .5s ease-out',
                'md-disappear': 'modal-desktop-disappear .5s ease-out',
                'mm-appear': 'modal-mobile-appear .5s ease-out',
                'mm-disappear': 'modal-mobile-disappear .5s ease-out',
                't-return': 'return .15s ease-in',
                't-vanish': 'vanish .15s ease-out',
            },
            keyframes: {
                'custom-bounce': {
                    '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubicBezier(0.8, 0, 1, 1)' },
                    '25%, 75%': { transform: 'translateY(-12.5%)', animationTimingFunction: 'cubicBezier(0.4, 0, 0.6, 1)' },
                    '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
                },
                'vanish': {
                    'from': { opacity: '1' },
                    'to': { opacity: '0' },
                },
                'return': {
                    'from': { opacity: '0' },
                    'to': { opacity: '1' },
                },
                'modal-desktop-appear': {
                    '0%': { opacity: '0', width: '0', height: '0' },
                    '25%': { opacity: '0.25', width: '145px', height: '150px' },
                    '50%': { opacity: '0.5', width: '290px', height: '300px' },
                    '75%': { opacity: '0.75', width: '435px', height: '490px' },
                    '100%': { opacity: '1', width: '580px', height: '690px' },
                },
                'modal-desktop-disappear': {
                    '0%': { opacity: '1', width: '580px', height: '690px' },
                    '25%': { opacity: '0.75', width: '435px', height: '490px' },
                    '50%': { opacity: '0.5', width: '290px', height: '300px' },
                    '75%': { opacity: '0.25', width: '145px', height: '150px' },
                    '100%': { opacity: '0', width: '0', height: '0' },
                },
                'modal-mobile-appear': {
                    '0%': { opacity: '0', width: '0', height: '0' },
                    '25%': { opacity: '0.25', width: '93.75px', height: '187.5px' },
                    '50%': { opacity: '0.5', width: '187.5px', height: '375px' },
                    '75%': { opacity: '0.75', width: '281.25px', height: '562.5px' },
                    '100%': { opacity: '1', width: '355px', height: '750px' },
                },
                'modal-mobile-disappear': {
                    '0%': { opacity: '1', width: '355px', height: '750px' },
                    '25%': { opacity: '0.75', width: '281.25px', height: '562.5px' },
                    '50%': { opacity: '0.5', width: '187.5px', height: '375px' },
                    '75%': { opacity: '0.25', width: '93.75px', height: '187.5px' },
                    '100%': { opacity: '0', width: '0', height: '0' },
                },
            },
        }
    }
}
