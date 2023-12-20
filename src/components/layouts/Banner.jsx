import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Content from '../Content'
import Image from '../Image'
import bannerModel from '../../assets/banner_img.png'
import Button from '../Button'
import Group from '../../assets/group.png'


const Banner = () => {
  return (
   <section id="home" className='bg-manuBgcolor pb-[186px] relative'>
    <Container className="max-w-containerBanner">
        <Flex className="justify-between">
            <div className="w-1/2">
              <div className="leading-[96px]">
              <Heading  text="Find The Best Fashion Style For You" as="h1"/>
              </div>
                <Content className='pr-[97px] pt-[38px] pb-[76px] font-poppinF font-normal text-[24px] leading-[33px]' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra."/>

                <Button className="font-semibold py-[25px] px-[90px] bg-black text-white rounded-xl" text="SHOP NOW"/>
                <Image className="absolute right-[792px] top-[405px]" src={Group}/>

            </div>
            <div className="w-1/2 pl-[104px] z-10">
               <Image src={bannerModel}/>
            </div>
        </Flex>
    </Container>
   </section>
  )
}

export default Banner







{/* <div className="box">
<div className="w-[790px] bg-boxBgColor ">
   <Heading text="5000+" as="h3"/>
   <Content className="font-popinF font-medium text-[28px] text-black" text="Founded"/>
</div>
</div> */}