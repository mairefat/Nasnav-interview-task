// import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import ReactImageGallery from "react-image-gallery";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
// import ProductCard from "./ProductCard";

const ProductDetail = () => {
  const productDetailItem = {
    images: [
      {
        original:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
        thumbnail:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        original:
          "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
        thumbnail:
          "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        original:
          "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600",
        thumbnail:
          "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        original:
          "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        thumbnail:
          "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        original:
          "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
        thumbnail:
          "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
    logo:"/images/Adidas-Logo.png",
    title: "BIG ITALIAN SOFA",
    reviews: "22",
    numRev: "4.9 of 5",
    category: "Men",
    price: 9.999,
    previousPrice: 9.999,
    offer: "30% off",
    description:
      "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    size: ["Small", "Medium", "Large", "x Large", "xx Large"],
    color: ["gray", "violet", "red"],
  };
  const plusMinuceButton =
    "flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500";
  return (
    <div>
    <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
      {/* image gallery */}
      <div className="container mx-auto px-4">
        <ReactImageGallery
          showBullets={false}
          showFullscreenButton={false}
          showPlayButton={false}
          items={productDetailItem.images}
        />

        {/* /image gallery  */}
      </div>
      {/* description  */}

      <div className="mx-auto px-5 lg:px-5">
        <img src={productDetailItem.logo} alt="adidas"  style={{ width: '60px', height: '50px' }} />
        {/* <h2 className="pt-3 text-2xl font-bold lg:pt-0">
          {productDetailItem.title}
        </h2> */}
         <p className="pt-5 text-sm leading-5 font-bold">
          {productDetailItem.description}
        </p>
        <p className=" text-gray-500">
          <span className="font-normal">{productDetailItem.category}</span>
        </p>
        <div className="mt-1">
          <div className="flex items-center">
            <Rater
              style={{ fontSize: "20px" }}
              total={5}
              interactive={false}
              rating={4.5}
            />

            <p className="ml-3 text-sm font-bold">
              {productDetailItem.numRev}
            </p>

            <p className="ml-3 text-sm text-gray-400">
              {productDetailItem.reviews} Rates
            </p>
          </div>
        </div>
        
        <div className="flex">
        <p className="mt-4 text-xl font-bold text-violet-900">
          {productDetailItem.price}{" "}
          <span className="text-xs text-gray-400 ">LE</span>
        </p>

        <p className="mt-4 ml-4 text-xl font-bold text-violet-900">
          
          <span className="text-sm text-gray-400 line-through">
            {productDetailItem.previousPrice}
            <span className="text-xs text-gray-400 ">LE</span>
          </span>
          
        </p>

        <button className="border-none bg-[#fff100] ml-8 h-8 mt-4 rounded-md text-sm">
        {productDetailItem.offer}
        </button>
        </div>
        
        
        <hr className="mt-4"></hr>
        <div className="mt-6">
          <p className="pb-2 text-md font-bold">Size</p>
          <div className="flex gap-1">
            {productDetailItem.size.map((x, index) => {
              return (
                <div
                  key={index}
                  className="flex text-sm text-violet-900 h-14 w-16 rounded-full cursor-pointer items-center  justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                >
                  {x}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-6">
          <p className="pb-2 text-md font-bold">Color</p>
          <div className="flex gap-1">
            {productDetailItem.color.map((x, index) => {
              return (
                <div
                  key={index}
                  className={`h-8 w-8 cursor-pointer border border-white bg-${x}-600 focus:ring-2 focus:ring-${x}-500 active:ring-2 active:ring-${x}-500`}
                />
              );
            })}
          </div>
        </div>
        <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Quantity</p>
          <div className="flex">
            <button className= {`${plusMinuceButton} bg-[#fff100]` }>−</button>
            <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
              1
            </div>
            <button className={`${plusMinuceButton} bg-[#fff100]`}> +</button>
          </div>
        </div>
        <div className="mt-7 flex flex-row items-center gap-6">
          <button className="flex h-12 w-1/3 items-center justify-center bg-violet-900 text-white duration-100 hover:bg-blue-800">
            <BiShoppingBag className="mx-2" />
            Add to cart
          </button>
         <p className="font-bold text-sm">Pickup From Store </p>
        </div>
      </div>

      

      <div className="">
        <h3 className="text-violet-900 font-bold text-xl">Similar Products</h3>
        <p className="text-gray-500">You may like this products also</p>

{/*Make  4 cards */}


</div>

    </section>


    <div className="flex flex-row gap-8 grid-cols-4 w-full">

{/* card 1 */}
     
<div className="mt-4 max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
      <img
        className="w-full rounded-lg object-cover object-center"
        src={productDetailItem.images.original}
        alt="product"
      />
      <p className="my-4 pl-4 font-bold text-gray-500">{productDetailItem.description}</p>
      <div className="flex justify-between">
        <p className="mt-4 flex flex-col text-xl font-bold text-violet-900">
          <span>
          {productDetailItem.price}{" "}
          <span className="text-xs text-gray-400 ">LE</span>
          </span>
          <div>
          <span className="text-sm  text-gray-400 line-through">
            {productDetailItem.previousPrice}
            <span className="text-xs text-gray-400 ">LE</span>
            
          </span>
          <button className="border-none bg-[#fff100] ml-8 h-6 mt-4 rounded-md text-sm">
        {productDetailItem.offer}
        </button>

</div>
        </p>
        <div>
        <img src={productDetailItem.logo} alt="adidas"  style={{ width: '60px', height: '50px' }} />
        </div>
        
        
            </div>

          
          <div className="flex items-center justify-center">
          <Rater
              total={5}
              interactive={false}
              rating={4.5}
            />
            <p className="ml-3 text-sm font-bold">
              {productDetailItem.numRev}
            </p>
        </div>

        <div className="flex text-sm items-center justify-center">
          <p>Pickup From Egypt Mall</p>

        </div>
            </div>

            {/* card 2 */}

            <div className="mt-4 max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
      <img
        className="w-full rounded-lg object-cover object-center"
        src={productDetailItem.images.original}
        alt="product"
      />
      <p className="my-4 pl-4 font-bold text-gray-500">{productDetailItem.description}</p>
      <div className="flex justify-between">
        <p className="mt-4 flex flex-col text-xl font-bold text-violet-900">
          <span>
          {productDetailItem.price}{" "}
          <span className="text-xs text-gray-400 ">LE</span>
          </span>
          <div>
          <span className="text-sm  text-gray-400 line-through">
            {productDetailItem.previousPrice}
            <span className="text-xs text-gray-400 ">LE</span>
            
          </span>
          <button className="border-none bg-[#fff100] ml-8 h-6 mt-4 rounded-md text-sm">
        {productDetailItem.offer}
        </button>

</div>
        </p>
        <div>
        <img src={productDetailItem.logo} alt="adidas"  style={{ width: '60px', height: '50px' }} />
        </div>
        
        
            </div>

          
          <div className="flex items-center justify-center">
          <Rater
              total={5}
              interactive={false}
              rating={4.5}
            />
            <p className="ml-3 text-sm font-bold">
              {productDetailItem.numRev}
            </p>
        </div>

        <div className="flex text-sm items-center justify-center">
          <p>Pickup From Egypt Mall</p>

        </div>
            </div>

            {/* card 3 */}

            <div className="mt-4 max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
      <img
        className="w-full rounded-lg object-cover object-center"
        src={productDetailItem.images.original}
        alt="product"
      />
      <p className="my-4 pl-4 font-bold text-gray-500">{productDetailItem.description}</p>
      <div className="flex justify-between">
        <p className="mt-4 flex flex-col text-xl font-bold text-violet-900">
          <span>
          {productDetailItem.price}{" "}
          <span className="text-xs text-gray-400 ">LE</span>
          </span>
          <div>
          <span className="text-sm  text-gray-400 line-through">
            {productDetailItem.previousPrice}
            <span className="text-xs text-gray-400 ">LE</span>
            
          </span>
          <button className="border-none bg-[#fff100] ml-8 h-6 mt-4 rounded-md text-sm">
        {productDetailItem.offer}
        </button>

</div>
        </p>
        <div>
        <img src={productDetailItem.logo} alt="adidas"  style={{ width: '60px', height: '50px' }} />
        </div>
        
        
            </div>

          
          <div className="flex items-center justify-center">
          <Rater
              total={5}
              interactive={false}
              rating={4.5}
            />
            <p className="ml-3 text-sm font-bold">
              {productDetailItem.numRev}
            </p>
        </div>

        <div className="flex text-sm items-center justify-center">
          <p>Pickup From Egypt Mall</p>

        </div>
            </div>

            {/* card 4 */}

            <div className="mt-4 max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
      <img
        className="w-full rounded-lg object-cover object-center"
        src={productDetailItem.images.original}
        alt="product"
      />
      <p className="my-4 pl-4 font-bold text-gray-500">{productDetailItem.description}</p>
      <div className="flex justify-between">
        <p className="mt-4 flex flex-col text-xl font-bold text-violet-900">
          <span>
          {productDetailItem.price}{" "}
          <span className="text-xs text-gray-400 ">LE</span>
          </span>
          <div>
          <span className="text-sm  text-gray-400 line-through">
            {productDetailItem.previousPrice}
            <span className="text-xs text-gray-400 ">LE</span>
            
          </span>
          <button className="border-none bg-[#fff100] ml-8 h-6 mt-4 rounded-md text-sm">
        {productDetailItem.offer}
        </button>

</div>
        </p>
        <div>
        <img src={productDetailItem.logo} alt="adidas"  style={{ width: '60px', height: '50px' }} />
        </div>
        
        
            </div>

          
          <div className="flex items-center justify-center">
          <Rater
              total={5}
              interactive={false}
              rating={4.5}
            />
            <p className="ml-3 text-sm font-bold">
              {productDetailItem.numRev}
            </p>
        </div>

        <div className="flex text-sm items-center justify-center">
          <p>Pickup From Egypt Mall</p>

        </div>
            </div>



            </div>

    </div>

    
  );
};

export default ProductDetail;


 