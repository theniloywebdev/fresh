import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Content from '../Content'
import Button from '../Button'
import Image from '../Image'
import pro_one from '../../assets/one_product.png'
import pro_two from '../../assets/two_product.png'

const Product = () => {
  return (
   <section id='product' className='bg-productBgcolor'>
    <Container className="max-w-productContainer">
        <Flex>
             <div className="w-[470px] pt-[36px] pb-[180px]">
               <div className="header text-white leading-[83px]">
               <Heading  text="Best Seller Product" as="h3"/>
               </div>
               <Content className="pr-[33px] py-[40px] font-frankF font-bold text-[24px] text-white leading-[31px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus."/>
               <Button className="font-normal py-[24px] px-[86px] bg-black text-white rounded-2xl" text="Learn MORE"/>
             </div>
             <div className="w-[370px] pt-[56px]">
             <Flex>
             <div className="pro_one ml-[20px] mr-[30px]">
                    <Image src={pro_one}/>
                    <div className="w-[366px] pl-[22px] bg-white ">
                        <div className="star text-starColor pt-[9px] pb-[6px]">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        </div>
                         <Content className="font-poppinF font-semibold text-[22px] text-black" text="Sweater Shirt"/>
                        <Flex>
                        <Content className="font-poppinF font-normal text-[24px] text-dollarColor pb-[10px]" text="$45.99"/>
                         <Content className="font-poppinF font-normal text-[24px] text-black pl-[30px] pb-[10px]" text="$35.99"/>
                        </Flex>
                     
                    </div>
                </div>
                <div className="pro_two">
                    <Image src={pro_two}/>
                    <div className="w-[366px] pl-[22px] bg-white">
                        <div className="star text-starColor pt-[9px] pb-[6px]">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        </div>
                         <Content className="font-poppinF font-semibold text-[22px] text-black" text="Pants fashion"/>
                        <Flex>
                        <Content className="font-poppinF font-normal text-[24px] text-dollarColor pb-[10px]" text="$55"/>
                         <Content className="font-poppinF font-normal text-[24px] text-black pl-[30px] pb-[10px]" text="$44.99"/>
                        </Flex>
                     
                    </div>
                </div>
                
             </Flex>
             </div>
        
        </Flex>
    </Container>

   </section>
  )
}

export default Product