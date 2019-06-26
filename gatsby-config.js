module.exports = {
  siteMetadata: {
    title: `Hoang & Trang`,
    author: `HoangVX`,
    description: `Nơi chia sẻ những thông tin về đám cưới của Hoàng & Trang`,
    siteUrl: `https://hoangvx.info`,
    wedding: {
      date: '2019-07-22',
      groom: {
        name: 'Võ Xuân Hoàng ',
        info: [
          'Là kỹ sư công nghệ thông tin. Đang làm việc và sinh sống tại Nhật Bản. chơi game rất pro, đặt biệt là liên minh huyền thoại. Là một người hoà đồng với mọi người nhưng lại sống rất nội tâm.'
        ]
      },
      bride: {
        name: 'Đào Thi Khánh Trang',
        info: [
          'Là kỹ sư công nghệ thông tin. Hiện tại đang làm việc tại Nhật Bản. Là người hoà đồng, yêu màu hồng, ghét sự giả dối, thích tụ tập với bạn bè, yêu thích kinh doanh và shopping.',
        ]
      }
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/stories`,
        name: `stories`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/favicon-16x16.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
  ],
}
