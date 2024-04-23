import RadioProvider from '@/app/store/radio/RadioProvider';
import { useRadio } from '@/app/store/radio/RadioProvider';
import { useStore } from 'zustand';
import { RadioStoreType } from '@/app/models/store/types';

export default async function RadioLayout({ children }: {
  children: React.ReactNode
}) {
  // const store = useRadio();

  return (
    <RadioProvider>
      <section>{children}</section>
    </RadioProvider>
  )
}
