import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react"
import List from "../../public/list.json"
import Cards from "../components/cards.jsx"
export default function FreeBook() {
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
}
    const freebooks=List.filter((data)=>{
        return data.category==='free'
    })
    return(
        <>
        <div className="max-w-screen-2xl container mx-auto md:px-15 px-4">
            <div>
            <h1 className="text-lg pb-2 font-semibold">Free Offered Courses</h1>
            <p>Lorem hhsdj hfsdj jkshfkjs jkfhksdhfuseu dgjwgj udgjasf ygyue uifsfb efuhb uhfie weekwj ewhj jgnj ejhjk ewjkrn ewkfnwkn ewfjke fjsdk uit vxcbvx uieiu akskfjs uhuirerh jksdfjkuey ywqtuuef zaadjdj xcxjsjfb</p>
        </div>
        <div>
             <Slider {...settings}>
            {
            freebooks.map((item)=>(
                <Cards key={item.id} items={item}></Cards>
            ))
            }
      </Slider>
        </div>
        </div>
        </>
    )
}
