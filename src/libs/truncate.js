const truncateStr = (str, len) => {
    return str.length > len ? str.substring(0, len) + "..." : str;
}

export default truncateStr;