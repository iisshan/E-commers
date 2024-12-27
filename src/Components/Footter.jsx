import { resourcesLinks,platformLinks,communityLinks  } from "../constants"

const Footter = () => {
  return (
    <footer className="mt-20 border-t-2 py-10 border-neutral-400"> 
    <div className="grid grid-cols-2  lg:grid-cols-3 gap-4"  >
        <div>
            <h3 className="font-semibold text-xl mb-4">Resources</h3>
            <ul className="space-y-2">
                {resourcesLinks.map((items,index) =>(
                   <li key={index}>
                    <a className="text-neutral-300 text-sm hover:text-white" href={items.href}>{items.text}</a>

                   </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className="font-semibold text-xl mb-4">Platform</h3>
            <ul className="space-y-2">
                {platformLinks.map((items,index) =>(
                   <li key={index}>
                    <a className="text-neutral-300 text-sm hover:text-white" href={items.href}>{items.text}</a>

                   </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className="font-semibold text-xl mb-4">My first react project</h3>
            <ul className="space-y-2">
                {communityLinks.map((items,index) =>(
                   <li key={index}>
                    <a className="text-neutral-300 text-sm hover:text-white" href={items.href}>{items.text}</a>

                   </li>
                ))}
            </ul>
        </div>

    </div>
    
        
    </footer>
  )
}

export default Footter