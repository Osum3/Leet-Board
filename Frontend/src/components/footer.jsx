const  Footer=()=>{
    return (
         <div className="bg-[#0f172a] text-gray-300 py-2 px-2 ">
  <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center ">
    <div className="text-center sm:text-left">
      <p className="text-lg font-semibold">Ayush Dubey</p>
      <p className="text-sm">© {new Date().getFullYear()} Leetboard. All rights reserved.</p>
    </div>

    <div className="text-center sm:text-right text-sm space-y-1 flex gap-2">
      <p>
        📧 Email: <a href="mailto:ayushd264@gmail.com" className="text-blue-400 hover:underline">ayushd264@gmail.com</a>
      </p>
      <p>
        🔗 LinkedIn: <a href="https://www.linkedin.com/in/ayush-dubey-009a7421b/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
          linkedin.com/in/ayushdubey
        </a>
      </p>
    </div>
  </div>
</div>
    )
}
export default Footer;