

function Footer () {
  return (
    <div className=" bg-mintBlack">
        <div className="container mx-auto p-4">
            <div className="flex flex-col items-center justify-center lg:flex-row gap-4">
            <a href="/help" className="text-mintWite">Help/Faq</a>
             <a href="/about" className="text-mintWite">About</a>
             <a href="/membership" className="text-mintWite">Membership/Careers</a>
             <a href="/blog" className="text-mintWite">Blog</a>
             <a href="/terms" className="text-mintWite">Terms & conditions</a>
            </div>
            
         </div>
    </div>
  )
}

export default Footer; 