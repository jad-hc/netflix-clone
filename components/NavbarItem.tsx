import React from "react"

interface NavbarItemProps {
  label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  label
}) => {
  return (
    <div className='text-white cursor-pointer hover:text-green-300 transition'>
      Home
    </div>
  )
}

export default NavbarItem