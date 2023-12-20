import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '../../assets/Fresh.png'
import List from '../List'
import Button from '../Button'


const Navbar = () => {
  return (
  <nav className="bg-manuBgcolor">
    <Container className="max-w-container">
        <Flex>
          <div className="w-1/4 pt-[46px]">
            <Image src={Logo}/>
          </div>
          <div className="w-1/2 pt-[55px]">
            <ul>
               <Flex className="justify-evenly font-poppinF font-semibold text-[24px]">
               <List href="#" manuName="Men"/>
                <List href="#" manuName="Woman"/>
                <List href="#" manuName="Kids"/>
                <List href="#" manuName="Collection"/>
                <List href="#" manuName="Trends"/>
               </Flex>
            </ul>
          </div>
          <div className="w-1/4 pt-10 pb-[124px]">
            <Flex className="justify-end  space-x-[10px]">
            <Button className="font-semibold border border-btnBrcolor px-7 py-2.5 rounded-lg hover:bg-btnHcolor duration-700 hover:shadow-md btnSHAcolor" text="Login"/>
            <Button className="font-semibold border border-btnBrcolor px-3.5 py-2.5 rounded-lg hover:bg-btnHcolor duration-700 hover:shadow-md btnSHAcolor" text="Sign up"/>
            </Flex>
          </div>
        </Flex>
    </Container>
  </nav>
  )
}

export default Navbar