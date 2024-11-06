type PointerProps = {
  position: {
    x: number;
    y: number;
  };
};

export const Pointer = ({ position }: PointerProps) => {
  return (
    <div
      style={{
        position: "fixed",
        border: "solid 1px #fff",
        borderRadius: "50%",
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: `translate(-50%, -50%)`,
        width: '20px',
        height: '20px',
        transition: '0.5s cubic-bezier(0.075, 0.82, 0.165, 1)',
      }}
    ></div>
  );
};
