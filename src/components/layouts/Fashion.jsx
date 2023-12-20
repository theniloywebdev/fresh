import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import fashion from '../../assets/fashion.png'
import Heading from '../Heading'
import Content from '../Content'
import dot_bottom from '../../assets/dot_bottom.png'
import counter from '../../assets/counter.png'

const Fashion = () => {
  return (
   <section id='fashion' className='relative'> 
   <Container className="max-w-fashionContainer">
    <Flex>
        <div className="w-1/2 pt-[235px] pb-[335px] z-10 ">
            <Image className="" src={fashion}/>          
        </div>
        <div className="w-1/2 ml-[130px]">
            <div className="header leading-[83px] pt-[305px]">
                <Heading text="Best Fashion Since 2010" as="h3"/>
            </div>
            <Content className="pr-[230px] pt-[63px] font-frankF font-semibold text-[24px] text-black leading-[36px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, el    n viverra. "/>
        </div>
    </Flex>
    
   </Container>
   <div className="counter absolute bottom-[115px] right-[330px] ">
    <Image src={counter}/>
   </div>


     <div className="dot_top absolute top-[131px] left-[792px] ">
    <Image src={dot_bottom}/>
   </div>
  
     <div className="dot_bottom  absolute bottom-[-30px] left-[447px] -z-10 ">
       <Image src={dot_bottom}/>
     </div>
  

   </section>
  )
}

export default Fashion