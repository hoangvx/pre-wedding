import React from "react"
import { graphql } from "gatsby"
import moment from "moment"

import SEO from "../components/seo"
import Banner from "../components/banner";
import Layout from "../layouts";

import Img from "gatsby-image"
import Gallery from "../components/gallery";

class TopPage extends React.Component {
  interval = null

  constructor(props) {
    super(props)
    const { data } = props
    moment.locale('vi');
    let today = moment()
    let diff = moment(data.site.siteMetadata.wedding.date) - today
    let duration = moment.duration(diff, 'milliseconds')
    this.state = { duration }
  }

  _handleCountDown() {
    let { duration }  = this.state
    this.setState({
      duration: moment.duration(duration.as('milliseconds') - 1000, 'milliseconds')
    })
  }

  componentDidMount() {
    this.interval = setInterval(() => this._handleCountDown(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { data } = this.props
    let { duration } = this.state
    const weddingDate = moment(data.site.siteMetadata.wedding.date)

    const weddingDateFmt = weddingDate.format('DD/MM/YYYY')
    return (
      <Layout>
        <SEO title="Pre-Wedding" />
        <Banner bgClass="ht-banner-bg">
          <div className="ht-snow"/>
          <div className="hero-body ht-top-banner">
            <div className="tile">
              <div className="tile is-vertical is-8 ht-title">
                <Img className="is-hidden-mobile" fixed={data.names.childImageSharp.fixed} />
                <h3>{ weddingDateFmt }</h3>
                <h1>SAVE THE DATE</h1>
                <Img fixed={data.headding.childImageSharp.fixed} />
              </div>
            </div>
          </div>
          <div className="hero-foot"></div>
        </Banner>
        <Banner bgClass="ht-pattern-bg1">
          <div className="hero-body ht-card">
            <div className="container is-widescreen">
              <div className="tile is-vertical ht-padtop">
                <div className="tile ht-card-title">
                  <h1>Ngày chung đôi</h1>
                </div>
                <div className="tile ht-card-title">
                  <Img fixed={data.headding.childImageSharp.fixed} />
                </div>
                <div className="tile">
                  <div className="tile is-vertical ht-card-profile">
                    <figure className="image">
                      <Img className="is-rounded" fixed={data.groom.childImageSharp.fixed} />
                    </figure>
                    <h2>{ data.site.siteMetadata.wedding.groom.name }</h2>
                    <div>
                      {
                        data.site.siteMetadata.wedding.groom.info.map(i => (
                          <p key={i}>{i}</p>
                        ))
                      }
                    </div>
                    <p></p>
                  </div>
                  <div className="tile is-4 is-vertical ht-card-info">
                    <h2>Sau 3 năm 7 tháng 15 ngày yêu, chúng tớ đã quyết định về chung một nhà từ ngày </h2>
                    <h3>{ weddingDateFmt }</h3>
                    <h1>SAVE THE DATE</h1>
                    {/* <p>Việt Nam</p> */}
                  </div>  
                  <div className="tile is-vertical ht-card-profile">
                    <figure className="image">
                      <Img className="is-rounded" fixed={data.bride.childImageSharp.fixed} />
                    </figure>
                    <h2>{ data.site.siteMetadata.wedding.bride.name }</h2>
                    {
                      data.site.siteMetadata.wedding.bride.info.map(i => (
                        <p key={i}>{i}</p>
                      ))
                    }
                  </div>
                </div>
                <div className="tile ht-card-title">
                  <Img fixed={data.headding.childImageSharp.fixed} />
                </div>
                <div className="tile is-vertical ">
                  <div className="ht-divide">
                    <h4><b>Đừng Bỏ Lỡ! Chỉ Còn </b>
                    </h4>
                  </div>
                  <div className="tile ht-countdowm">
                    <div className="tile is-vertical ht-countdown-item">
                      <span>{Math.floor(duration.asDays())}</span>
                      <p>Ngày</p>
                    </div>
                    <div className="tile is-vertical ht-countdown-item">
                      <span>{duration.hours()}</span>
                      <p>Giờ</p>
                    </div>
                    <div className="tile is-vertical ht-countdown-item">
                      <span>{duration.minutes()}</span>
                      <p>Phút</p>
                    </div>
                    <div className="tile is-vertical ht-countdown-item">
                      <span>{duration.seconds()}</span>
                      <p>Giây</p>
                    </div>
                  </div>
                  <div className="ht-divide">
                    <h4><b>Là Chúng Tớ Về Chung Một Nhà Rồi Đấy!</b></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Banner>
        <Banner bgClass="ht-pattern-bg3">
          <div className="ht-mask"/>
          <div className="hero-body ht-gallery">
            <div className="container is-widescreen">
              <div className="tile is-vertical ht-padtop">
                <div className="tile ht-gallery-title">
                  <h1>Lời Ngỏ</h1>
                </div>
                <div className="tile ht-gallery-title">
                  <Img fixed={data.headding.childImageSharp.fixed} />
                </div>
                <div className="tile ht-guest">
                  <div className="tile is-6 is-vertical ht-somewords">
                    <h1>Thân Mời</h1>
                    <p> 
                      Ngay từ những ngày đầu chuẩn bị cho lễ cưới, cả hai đã ấp ủ cho mình một trang web cưới - như là một nơi lưu giữ, đếm ngược lại sự kiện trọng đại này của mình và cũng sẽ là cầu nối gửi lời mời của chúng mình đến bạn bè và người thân ở khắp mọi nơi. 
                    </p>
                    <p>
                      Thân gửi lời mời trân trọng nhất đến anh, chị em, bạn bè cùng người thương đến chung vui cùng Hoàng và Trang trong ngày vui của chúng mình. 
                    </p>
                    <p>
                      Đây không chỉ là dịp thể hiện tình cảm và sự yêu quý của mọi người dành cho cả 2 đứa mình mà còn là dịp để gặp mặt nhau sau nhiều ngày, nhiều tháng, nhiều năm xa cách.
                    </p>
                    <p>  
                      Nếu có thể sắp xếp được thời gian và công việc hãy cùng đồng hành với chúng mình trong ngày vui trọng đại này nhé!
                    </p>
                    <p>
                      Trong trường hợp không thể tham gia được, còn chần chừ gì nữa mà không gửi cho chúng mình những lời chúc có cánh!
                    </p>
                    <p>Để có thể đón tiếp chu đáo nhất, hãy cho chúng mình biết bạn có thể tham gia hay không và số lượng người tham gia ở form bên cạnh nhé! </p>
                    <p className="has-text-right">From Japan with big love </p>
                    <h1 className="has-text-right">Hoàng & Trang</h1>
                    <h1 className="has-text-right">Trân trọng!</h1>
                  </div>
                  <div className="tile is-6 ht-form">
                    <iframe title="ggs" src="https://docs.google.com/forms/d/e/1FAIpQLSePOVzpYWddAurfr9TOpHYh34KjXT6YGZ_956x_nWortpDw0A/viewform?embedded=true" width="640" height="628" frameBorder="0">Loadding...</iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Banner>
        <Banner bgClass="ht-pattern-bg1">
          <div className="hero-body ht-card">
            <div className="container ht-place-map is-widescreen">
              <div className="tile is-vertical ht-padtop">
                <div className="tile ht-card-title">
                  <h1>Địa điểm nhà gái</h1>
                </div>
                <div className="tile ht-card-title">
                  <Img fixed={data.headding.childImageSharp.fixed} />
                </div>
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile ht-card-title">
                      <div className="tile ht-left">
                        <div className="tile is-vertical">
                          <h2> Hôn lễ được cử hành tại tư gia nhà gái </h2>
                          <h3> Vào lúc 09:30 ngày 22/7/2019</h3>
                          <p> 25 Phan Chu Trinh, Đồng Mỹ, Đồng Hới, Quảng Bình, Việt Nam</p>
                        </div>
                      </div>
                      <div className="tile ht-right">
                        <iframe title="if1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.608611670935!2d106.62016345102359!3d17.478437287965267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31475729edd74511%3A0xb217ea600005190c!2zMjUgUGhhbiBDaHUgVHJpbmgsIMSQ4buTbmcgTeG7uSwgxJDhu5NuZyBI4bubaSwgUXXhuqNuZyBCw6xuaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sjp!4v1560052811536!5m2!1svi!2sjp" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                      </div> 
                    </div>
                  </div>
                  <div className="tile">
                    <div className="tile ht-card-title">
                      <div className="tile ht-left">
                        <div className="tile is-vertical">
                          <h2>Tiệc cưới diễn ra tại Nhà hàng Tiệc cưới Royal Queen </h2>
                          <h3>Vào 17:00 ngày 22/7/2019</h3>
                          <p>53 Nguyễn Hữu Cảnh, TP.Đồng Hới, Quảng Bình</p>
                        </div>
                      </div>
                      <div className="tile ht-right">
                        <iframe title="if2" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15223.560002856604!2d106.6186307!3d17.4649782!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x91d292fcbb7b2557!2zTmjDoCBIw6BuZyBUaeG7h2MgQ8aw4bubaSBSb3lhbCAtIEPDtG5nIFR5IFROSEggWEQgJiBUTSBI4bqjaSBUaMOgbmg!5e0!3m2!1sen!2sjp!4v1561020814787!5m2!1sen!2sjp" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tile ht-card-title">
                  <h1>Địa điểm nhà trai</h1>
                </div>
                <div className="tile ht-card-title">
                  <Img fixed={data.headding.childImageSharp.fixed} />
                </div>
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile ht-card-title">
                      <div className="tile ht-left">
                        <div className="tile is-vertical">
                          <h2>Hôn lễ được cử hành tại tư gia nhà trai </h2>
                          <h3>Vào lúc 10:00 ngày 26/7/2019</h3>
                          <p>178 Thanh Sơn, Nam Xuân, Krông Nô, Đak Nông, Việt Nam</p>
                        </div>
                      </div>
                      <div className="tile ht-right">
                        <iframe title="if3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.358855090208!2d107.78359795097634!3d12.492356991128256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDI5JzMyLjUiTiAxMDfCsDQ3JzA4LjkiRQ!5e0!3m2!1svi!2sjp!4v1560052402202!5m2!1svi!2sjp" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Banner>
        <Banner sizeClass="is-medium" bgClass="ht-pattern-bg2">
          <div className="hero-body ht-gallery">
            <div className="container is-widescreen">
              <div className="tile is-vertical">
                <div className="tile ht-gallery-title">
                  <h4>Hoàng & Trang</h4>
                </div>
                <div className="tile ht-gallery-title">
                  <h1>Góc Kỉ Niệm
                  </h1>
                </div>
                <div className="tile ht-gallery-title">
                  <Img fixed={data.headding.childImageSharp.fixed} />
                </div>
                <div className="tile">
                  <Gallery />
                </div>
              </div>
            </div>
          </div>
        </Banner>
        <Banner sizeClass="is-small" bgClass="ht-pattern-bg1">
          <div className="hero-body ht-donate">
            <div className="container is-widescreen">
              <div className="tile is-vertical">
                <div className="tile ht-donate-title">
                  <h1>Thông tin để Donate</h1>
                </div>
                <div className="tile ht-donate-title">
                  <h4>Dành cho những bạn không đến tham gia được</h4>
                </div>
                <div className="tile ht-donate-title">
                  <Img fixed={data.headding.childImageSharp.fixed} />
                </div>
                <div className="tile ht-donate-content">
                  <div className="card">
                    <div className="card-content">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48">
                            <img alt="" src="http://graph.facebook.com/100001147277648/picture?type=square" />
                          </figure>
                        </div>
                        <div className="media-content">
                          <p className="title is-4">{ data.site.siteMetadata.wedding.groom.name }</p>
                          <p className="subtitle is-6">hoang.vx@outlook.jp</p>
                        </div>
                      </div>
                      <div className="content">
                        Cảm ơn bạn nào gửi tiền cho <i>Hoàng</i> nhá :3 haha
                        <hr />
                        Ngân hàng Tiên Phong Bank
                        <br />
                        Chi nhánh Hải Châu Đà Nẵng
                        <br />
                        Số tài khoản: <strong>00036265003</strong>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-content">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48">
                            <img alt="" src="http://graph.facebook.com/100009074477752/picture?type=square" />
                          </figure>
                        </div>
                        <div className="media-content">
                          <p className="title is-4">{ data.site.siteMetadata.wedding.bride.name }</p>
                          <p className="subtitle is-6">trangdtk93@gmail.com</p>
                        </div>
                      </div>
                      <div className="content">
                        Nhận quà dưới mọi hình thức ahihi ⬇︎
                        <hr />
                        Thông tin đang cập nhật
                        <br />
                        Số tài khoản: <strong>...</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Banner>
      </Layout>
    )
  }
}

export default TopPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        wedding {
          date
          groom {
            name
            info
          }
          bride {
            name
            info
          }
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    names: file(relativePath: { eq: "names.png" }) {
      childImageSharp {
        fixed(width: 400, height: 325) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    headding: file(relativePath: { eq: "headding.png" }) {
      childImageSharp {
        fixed(width: 177, height: 22) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    groom: file(relativePath: { eq: "groom-profile.png" }) {
      childImageSharp {
        fixed(width: 256, height: 256) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    bride: file(relativePath: { eq: "bride-profile.png" }) {
      childImageSharp {
        fixed(width: 256, height: 256) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`