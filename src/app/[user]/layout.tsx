import Container from "../components/projects/Container";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <Container>{children}</Container>;
}
