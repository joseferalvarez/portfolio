const getUser = async () => {
    const res = await fetch("https://api.github.com/users/JoseFerAlvarez");
    return res.json();
}

export { getUser };