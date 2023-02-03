/* eslint-disable import/prefer-default-export */
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);

export interface PropsSliderImageCTA {
  name: string;
  imagePath: string | StaticImageData;
}

const SliderImageCTA = ({
  dataImages,
}: {
  dataImages: PropsSliderImageCTA[];
}) => {
  return (
    <Flex
      sx={{
        ".swiper": {
          display: "flex",
          width: "100%",
          height: "100%",
          maxWidth: "720px",
          backgroundSize: "cover",
        },
        ".swiper-slide": {
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
        },
      }}
    >
      <Swiper
        effect="fade"
        loop
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {dataImages.map((dataImage) => (
          <SwiperSlide key={dataImage.name}>
            <Flex h="full" w="full">
              <Image
                src={dataImage.imagePath}
                alt={dataImage.name}
                height="500"
                width="720"
              />
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};

export { SliderImageCTA };
