import { dockApps } from "#constants";
import useWindowStore from "#store/window";
import { Tooltip } from "react-tooltip";
import { MacOSDock } from "./ui/shadcn-io/mac-os-dock";

const Dock = () => {
  const { openWindow, closeWindow, windows } = useWindowStore();

  let openApps = [];

  if (windows && windows.length > 0) {
    openApps = windows.filter((window) => window.isOpen === true);
  }

  const toggleApp = (appId) => {
    const app = dockApps.find((app) => app.id === appId);
    if (!app.canOpen) return;

    const window = windows[app.id];
    if (window.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }
  };

  // const openApps = windows.filter((window) => window.isOpen);

  return (
    <section id="dock">
      <MacOSDock
        apps={dockApps}
        onAppClick={(appId) => toggleApp(appId)}
        openApps={openApps}
      />
      <Tooltip id="dock-tooltip" place="top" className="tooltip" />
    </section>
  );
};

export default Dock;
