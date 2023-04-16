import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IMAGE_URL } from '../../utils/constants';
import s from './Details.module.scss'

import { Keyboard, EffectCube, Pagination } from "swiper";
import { useLocation, useNavigate } from 'react-router-dom';


interface Props {
    ingredients: any
}

const DetailsSecond: React.FC<Props> = ({ ingredients }) => {
    console.log(ingredients);

    const { pathname } = useLocation()
    const navigate = useNavigate()


    const navigateIngredient = (name: any) => {
        navigate(`${pathname}/ingredient/${name}`)
    }


    return (
        <div className={s.detailsSwiper}>
            <Swiper
                effect={"cube"}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}

                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                loop={true}
                pagination={true}
                modules={[Keyboard, EffectCube, Pagination]}
                className="mySwiper"
            >

                {ingredients?.map((el: any) => {
                    return (
                        <SwiperSlide onClick={() => navigateIngredient(el)} key={el}>
                            <img src={`${IMAGE_URL}${el}.png`} alt="" />
                        </SwiperSlide>
                    )
                })}



            </Swiper>
        </div>
    );
};

export default DetailsSecond;