import React from 'react';

import { motion } from 'framer-motion';

export const Box = () => (
  <motion.div
    className="bg-blue-500"
    style={{ height: 300, width: 300 }}
    whileTap={{ rotate: 120 }}
    animate={{
      scale: [0.2, 0.4, 1, 1.6, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ['20%', '20%', '50%', '50%', '20%'],
    }}
    transition={{ duration: '2' }}
  />
);

export default Box;
