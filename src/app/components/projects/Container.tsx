// This component is for adusting the width of the content in the page.
type ContainerProps = {
    children: React.ReactNode;
    maxWidth?: string;
    padding?: string;
    additionalClasses?: string;
}

export default function Container({ children, maxWidth='max-w-[1200px]', padding='', additionalClasses='' }: ContainerProps) {
  return (
    <div className={`w-full ${maxWidth} ${padding} ${additionalClasses} mx-auto`}>
        { children }
    </div>
  )
}
