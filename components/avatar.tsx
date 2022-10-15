import Image from "next/image";

type Props ={
    src: string;
};

const Avatar = ({ src }: Props) => {
    if (src) {
      return <Image src={src} className="block rounded-full w-10 h-10" alt="" />;
    } else {
      return <div className="w-10 h-10 bg-gray-400 rounded-full"></div>;
    }
  };
  
  export default Avatar;