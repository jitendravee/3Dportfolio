import { motion } from 'framer-motion';
import { styles } from '../styles'
import { ComputerCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
    <div {`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-rowitems-start gap-5`}>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg[#916eff]" />
      </div>

    </div>
  </section>
  )
}

export default Hero

