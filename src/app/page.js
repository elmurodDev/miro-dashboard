import React from 'react';
import SearchBar from "@/components/common/SearchBar";
import ConnectCard from "@/components/common/ConnectCard";
import Image from "next/image";


const Page = () => {

  const cardArray = [
    {
      img: <Image src={"/envelope-line-icon.svg"} width={40} height={40} alt={"Email"} />,
      title: 'Email',
      text: 'Recive an email every time a user submit their answer',
      isActive: true
    },

    {
      img: <Image src={"/google-sheets-icon.svg"} width={40} height={40} alt={"Google sheet"} />,
      title: 'Google Sheets',
      text: 'Send your data straight to Google Sheets. Automatically syncs as results come in.',
      isActive: false
    },

    {
      img: <Image src={"/microsoft-excel-icon.svg"} width={40} height={40} alt={"Excel"} />,
      title: 'Excel',
      text: 'Send your typeform responses to Excel Online. Turn feedback into graphs, support quries into workflows, and much more.',
      isActive: false
    }
  ]

  return (
    <div className={"flex w-full flex-col gap-10"}>
      <SearchBar/>
      <div className={"flex flex-col gap-6"}>
        {
          cardArray && (
            cardArray.map((item, index) => (
              <ConnectCard key={index} img={item.img} text={item.text} isActive={item.isActive} title={item.title}/>
            ))
          )
        }
      </div>
    </div>
  );
};

export default Page;