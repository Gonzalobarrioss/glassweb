import React from 'react'

import Perfil from '../../assets/images/perfil.jfif'
import Twitch from '../../assets/images/twitch.png'
import Steam from '../../assets/images/steam.png'
import Library from '../../assets/images/library.png'
import Upcoming from '../../assets/images/upcoming.png'
import Controller from '../../assets/images/controller.png'
import AssassinsCreed from '../../assets/images/assassins.png'
import SackBoy from '../../assets/images/sackboy.png'
import Spiderman from '../../assets/images/spiderman.png'


//import * as THREE from 'three'

import { 
  MainContainer,
  Dashboard,
  User, 
  ImageProfile, 
  Links, 
  Link, 
  Pro,
  Games,
  Status,
  Cards,
  Card,
  Name,
  Description,
  SubTitle,
  H1,
  CardInfo,
  ProgressBar,
  Percentage
} from './MainElements'

function Main() {
  return (
    <MainContainer>
      <Dashboard>

        <User> 
          <ImageProfile> 
            <img src={Perfil} alt='' style={{objectFit: 'cover', width: "100%", height: "100%", borderRadius: "50%"}}/>
          </ImageProfile>
          <Name>Gonzalo Barrios</Name>
          <Description>Streamer</Description>
        </User>

        <Links>
          <Link>
            <img src={Twitch} alt=''/>
            <SubTitle>Streams</SubTitle>
          </Link>
          <Link>
            <img src={Steam} alt=''/>
            <SubTitle>Games</SubTitle>
          </Link>
          <Link>
            <img src={Library} alt=''/>
            <SubTitle>Library</SubTitle>
          </Link>
          <Link>
            <img src={Upcoming} alt=''/>
            <SubTitle>New</SubTitle>
          </Link>
        </Links>

        <Pro>
          <SubTitle>Entra para obtener tu descuento</SubTitle>
          <img src={Controller} alt=''/>
        </Pro>

      </Dashboard>

      <Games>

        <Status>
          <H1>Juegos Activos</H1>
          <input type="text" />
        </Status>

        <Cards>

          <Card>
            <img src={AssassinsCreed} alt=''/>
            <CardInfo>
              Assasins Creed Valhalla
              <Description>PS5 Version</Description>
              <ProgressBar percentage={60}/>
            </CardInfo>
            <Percentage>60%</Percentage>
          </Card>
          <Card>
            <img src={SackBoy} alt=''/>
            <CardInfo>
              Sackboy A Great Adventure
              <Description>PS5 Version</Description>
              <ProgressBar percentage={20}/>
            </CardInfo>
            <Percentage>20%</Percentage>
          </Card>
          <Card>
            <img src={Spiderman} alt=''/>
            <CardInfo>
              Spiderman Miles Morales
              <Description>PC Version</Description>
              <ProgressBar percentage={90}/>
            </CardInfo>
            <Percentage>90%</Percentage>
          </Card>

        </Cards>

      </Games>

    </MainContainer>
  )
}

export default Main