
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "290px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "20px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "90px" : "165px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "7px"};
  gap: 9px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
  border: none;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 13px;
  color: ${({ theme }) => theme.textSoft};
  margin: 2px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type, video }) => {
  
    // const [channel, setChannel] = useState([]);
  
    // useEffect(()=>{
    //   const fetchChannels = async () =>{
    //     const res = await axios.get(`/users/find/${video.userId}`);
    //     setChannel(res.data);
    //   }
    //   fetchChannels();
    // },[video.userId])
  
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
      <Image
          type={type}
          src="https://i9.ytimg.com/vi_webp/k3Vfj-e1Ma4/mqdefault.webp?v=6277c159&sqp=CIjm8JUG&rs=AOn4CLDeKmf_vlMC1q9RBEZu-XQApzm6sA"
        />
        <Details type={type}>
        <ChannelImage
            type={type}
            src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
          />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Lama Dev</ChannelName>
            <Info>660,908 views • 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
