import BackTop from "@/components/BackTop";
import Github from "./icons/Github";
import { Setter, createEffect, createSignal, onCleanup } from "solid-js";
import toast from "solid-toast";
import { Toaster } from "solid-toast";

interface Props {
  setWaimai: Setter<boolean>;
}
const customTosat = () => {
  const duration = 10000;
  toast.custom(
    (t) => {
      // Start with 100% life
      const [life, setLife] = createSignal(100);
      const startTime = Date.now();
      createEffect(() => {
        if (t.paused) return;
        const interval = setInterval(() => {
          const diff = Date.now() - startTime - t.pauseDuration;
          setLife(100 - (diff / duration) * 100);
        });

        onCleanup(() => clearInterval(interval));
      });

      return (
        <div>
                 </div>
      );
    },
    {
      duration: duration,
    }
  );
};

export default ({ setWaimai }: Props) => (
  <footer class="mt-6 text-sm text-slate-800 op-90">
    
  </footer>
);
