export const PageTitle: React.FC<React.ComponentPropsWithoutRef<'h1'>> = ({
  children,
  ...props
}) => {
  return (
    <h1 className="PageTitle" {...props}>
      {children}
    </h1>
  )
}
