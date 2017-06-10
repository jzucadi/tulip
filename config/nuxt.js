'use strict'

const resolve = require('path').resolve

module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'James Zaccardo | Web Developer',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'Portofino',
                name: 'JZ',
                content: 'Portfolio'
            }
        ],
        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: 'favicon.ico'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Lato|Lora:700|Open+Sans'
            }
        ]
    },
    /*
     ** Global CSS
     */
    css: ['~assets/css/main.css'],
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#2196F3' },
    /*
     ** Point to resources
     */
    srcDir: resolve(__dirname, '..', 'resources')
}