/* eslint-disable import/prefer-default-export */
// Import Swiper React components
import { Flex, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { useCallback, useState, useEffect } from "react";
import SwiperCore, { Navigation, Pagination, EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { CardActions } from "components/CardActions";
import { FlexMotion } from "components/motion/FlexMotion";
import { PropsData } from "utils/getInformationCrypto";

SwiperCore.use([Navigation, Pagination, EffectCreative]);

const SliderCrypto = ({ dataCrypto }: { dataCrypto: PropsData[] }) => {
  const [dataDivided, setDataDivided] = useState<any[][]>([]);
  const isMobileView = useBreakpointValue({ base: true, md: false });

  const divideArrayInGroup = useCallback(
    (dataArray: Array<any>, numberGroups: number) => {
      const dividedGroup = Math.ceil(dataArray.length / numberGroups);
      return new Array(numberGroups)
        .fill("")
        .map((_, index) =>
          dataArray?.slice(index * dividedGroup, (index + 1) * dividedGroup)
        );
    },
    []
  );

  useEffect(() => {
    const dataDividedInGroup = divideArrayInGroup(dataCrypto, 5);
    setDataDivided(dataDividedInGroup);
  }, [dataCrypto, divideArrayInGroup]);

  return (
    <Flex
      sx={{
        ".swiper": {
          width: "100%",
          height: "100%",
        },
        ".swiper-slide": {
          width: "100%",
          height: "100%",
          padding: "75px 30px 75px ",
          backgroundColor: "#333333",
        },
        ".swiper-button-next, .swiper-button-prev": {
          top: "unset",
          bottom: "0px",
          color: "#fff",
          zIndex: 11,
        },

        ".swiper-button-next": {
          right: isMobileView ? "15%" : "30%",
        },
        ".swiper-button-prev": {
          left: isMobileView ? "15%" : "30%",
        },
        ".swiper-pagination-bullet": {
          backgroundColor: "#fff",
          height: "15px",
          width: "15px",
        },
      }}
    >
      <Swiper
        effect="creative"
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
      >
        {dataDivided.map((dataArray) => (
          <SwiperSlide>
            <FlexMotion>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  // sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                }}
                gap={6}
                rowGap={14}
              >
                {dataArray.map((dataCoin) => (
                  <GridItem key={(Math.random() * 30).toString()}>
                    <CardActions {...dataCoin} />
                  </GridItem>
                ))}
              </Grid>
            </FlexMotion>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};

export { SliderCrypto };
