import dynamic from "next/dynamic";

const NoSSRWrapper = ({children}) => (
    <>{children}</>
)

export default dynamic(()=>
Promise.resolve(NoSSRWrapper),{
    ssr:false
});