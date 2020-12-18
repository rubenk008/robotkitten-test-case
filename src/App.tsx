import * as React from 'react'

import ParallaxBackground from './components/ParallaxBackground'
import ProductGrid from './components/ProductGrid'
import Intro from './components/Intro'
import StarsBackground from './components/StarsBackground'

const App = () =>{

  const appWrapperRef= React.useRef<HTMLDivElement>(null)
  const [appWrapperHeight, setAppWrapperHeight] = React.useState(0)

  React.useEffect( () => {

        if(appWrapperRef.current){
            setAppWrapperHeight(appWrapperRef.current.offsetHeight);
        }

    }, [appWrapperRef]);


  return (
    <div className="appWrapper" ref={appWrapperRef}>
      <StarsBackground />
      <ParallaxBackground 
          heightParrent={appWrapperHeight}
      />
      <Intro />
      <ProductGrid />
    </div>
  );
}

export default App
 