import { Skeleton } from "./ui/skeleton";

const SKeletonBanner = () => {
    return ( 
        <div className="bg-gray-900 lg:h-96 relative p-1 h-80">
            <Skeleton className="absolute z-50 size-20 rounded-full left-2 top-2"/>
            <Skeleton className="absolute z-50 h-14 w-44 rounded-lg left-24 top-6"/>
            <Skeleton className="absolute hidden md:visible z-50 size-16 rounded-full right-56 top-6"/>
            <Skeleton className="absolute hidden md:visible z-50 h-16 w-44 rounded-xl right-2 top-6"/>
        <div className="flex flex-col space-y-3">
      <Skeleton className="h-52 w-full rounded-xl" />
      <div className="space-y-2 flex justify-center items-center flex-col gap-2">
        <Skeleton className="h-10 w-[80%]" />
        <Skeleton className="h-6 w-[50%]" />
      </div>
    </div>
    </div>
     );
}
 
export default SKeletonBanner;