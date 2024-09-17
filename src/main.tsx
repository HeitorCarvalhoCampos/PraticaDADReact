import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import styles from './index.module.css'
import Section from "./components/Section/Section"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Section />
  </StrictMode>,
)

