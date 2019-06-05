import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`
export const HomeLeft = styled.div`
  width: 625px;
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  .banner-img{
    width: 625px;
    height: 270px;
  }
`
export const HomeRight = styled.div`
  width: 280px;
  float:right;
`
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;

`
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  background: #f7f7f7;
  margin-left: 18px;
  padding-right: 10px;
  font-zise:14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin-bottom: 18px;

  .topic-pic{
    margin-right: 10px;
    width: 32px;
    height: 32px;
    float: left;
  }
`
export const ListItem =  styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .pic{
    display: block;
    width: 125px;
    height: 100px;
    float: right;
  }
`
export const ListInfo =  styled.div`
  width: 500px;
  float: left;
  .title{
    line-height: 27px;
    color: #333;
    font-weight: bold;
    font-size: 18px;
  }
  .desc{
    line-height: 24px;
    color: #999;
    font-size: 13px;
  }
`
export const RecommendWrapper =  styled.div`
  margin: 30px 0;
  width: 280px;
`
export const RecommendItem =  styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 10px;
  background:url(${(props)=>props.imgUrl}) no-repeat center;
  .pic{
    width:100%;
    height:100%;
  }
`
export const WriterWrapper =  styled.div`
  width: 280px;
`
export const WriterItem =  styled.div`
  width: 280px;
  height: 50px;
  background: #ccc;
  text-align:center;
  line-height: 50px;
`

