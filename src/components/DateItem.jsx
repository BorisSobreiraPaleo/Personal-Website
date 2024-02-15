/* eslint-disable react/prop-types */
const DateItem = ({year, title, subtitle, details}) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-[#03396c]" >
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-[#60a5fa] dark:bg-[#03396c] rounded-full mt-2.5 -left-1.5 border dark:border-[#60a5fa] border-[#03396c]"/>
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#03396c] rounded-md">{year}</span>
          <span className="text-lg font-semibold text-[#03396c] dark:text-[#f4f4f9]">{title}</span>
          <span className="my-1 text-sm font-normal leading-none text-[#60a5fa]">{subtitle}</span>
        </p>
        <p className="my-2 text-base font-normal text-[#000B11] dark:text-[#f4f4f9]">{details}</p>
      </li>
    </ol>
  )
}

export default DateItem
