import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Image from '../Image'
import col_one from '../../assets/one_collection.png'
import col_two from '../../assets/two_collection.png'
import col_three from '../../assets/three_collection.png'
import Button from '../Button'


const Collection = () => {
  return (
   <section id='collection' className='bg-white pt-[216px] relative'>
     <Container className="max-w-collectionContainer">
       <div className="text-center pb-[120px]">
       <Heading  text="New Collection" as="h3"/>
       </div>
        <Flex>
           <div className="card_one relative mr-[100px] ">
           <Image className="" src={col_one} />
           <div className="absolute bottom-[45px] left-[20px]">
            <Button className="font-normal py-[9px] px-[104px] text-black bg-white rounded-2xl" text="Sweater"/>
           </div>
           </div>
           <div className="card_two relative mr-[100px] ">
           <Image className="" src={col_two} />
           <div className="absolute bottom-[45px] left-[20px]">
            <Button className="font-normal py-[9px] px-[104px] text-black bg-white rounded-2xl" text="Jeans"/>
           </div>
           </div>
           <div className="card_three relative ">
           <Image className="" src={col_three} />
           <div className="absolute bottom-[45px] left-[20px]">
            <Button className="font-normal py-[9px] px-[104px] text-black bg-white rounded-2xl" text="Baskets"/>
           </div>
           </div>
          
        </Flex>
     </Container>
    

   </section>
  )
}

export default Collection