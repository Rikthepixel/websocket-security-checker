import cswshIcon from "assets/images/tool_icons/cswsh.png";
import getPageName from 'utils/getPageName';
import { StaticImageData } from "next/image";

interface ITool {
    href: string;
    icon: StaticImageData;
    name: string;
}

const TOOLS: Omit<ITool, "name">[] = [
    {
        href: "/cross-site_websocket_hijacking",
        icon: cswshIcon
    }
];

export default TOOLS.map<ITool>((tool) => ({
    ...tool,
    name: getPageName(tool.href),
    href: `/tools${tool.href}`,
}));