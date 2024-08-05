interface NavBarProps{
   reset:()=>void
}
function NavBar({reset}:NavBarProps){
  return(
    <>
    <nav>
    <h2>CountI</h2>
    <button onClick={reset}>reset</button>
  </nav>
  </>
  )
}
export default NavBar;