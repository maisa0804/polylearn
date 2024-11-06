import { useEffect, useState } from "react";

export const useMouseStalking = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
   
    useEffect(() => {
        const mouseMoveListener = (event:MouseEvent) => {
          setPosition({ x: event.clientX, y: event.clientY });
        };
    
        // マウント時：マウスイベントリスナを追加
        window.addEventListener("mousemove", mouseMoveListener);
    
        // アンマウント時：マウスイベントリスナを削除
        return () => {
          window.removeEventListener("mousemove", mouseMoveListener);
        };
      }, []);

    return position;
  };