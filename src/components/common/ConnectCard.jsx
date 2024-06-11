import React from 'react';
import {Card, CardContent} from "@/components/ui/card";
import {TbCheck, TbMail, TbMessage} from "react-icons/tb";
import {Button} from "@/components/ui/button";

const ConnectCard = ({img, title, text, isActive = false}) => {
  return (
    <Card className="w-full">
      <CardContent className={"flex justify-between items-center py-6"}>
        <div className={"flex gap-8 items-center"}>
          <span>
            <TbMail className={"w-20 h-20"} />
          </span>
          <div className={"flex flex-col gap-2"}>
            <div className={"flex items-center gap-2"}>
              {title}
              {isActive &&
                (
                  <span className={"px-3 py-1 rounded-full bg-green-100 flex gap-1 text-green-400 items-center"}>
                    Active <TbCheck className={"icon"}/>
                  </span>
                )
              }
            </div>
            <p>{text}</p>
          </div>
        </div>
        <div className={"flex items-center"}>
          {!isActive && <Button size={"lg"}>
            Connect
          </Button>}
        </div>
      </CardContent>
    </Card>
  );
};

export default ConnectCard;