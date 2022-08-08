export const getPageName = (pathName: string): string => {
    const endpoint = pathName.split("/").pop() ?? "";
    const pageNameParts = endpoint.split("_");

    const firstWord = pageNameParts[0];
    pageNameParts[0] = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);

    return pageNameParts.join(" ");
};

export default getPageName;