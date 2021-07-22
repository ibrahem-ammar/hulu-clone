export default function HeaderItem({ title,Icon }) {
    return (
        <div className="group uppercase flex flex-col cursor-pointer w-12 sm:w-20 hover:text-white">
            <Icon className="h-6 mb-1" />
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
        </div>
    )
}
