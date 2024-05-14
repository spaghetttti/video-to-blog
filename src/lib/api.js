export const checkServerConnection = async () => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_LOCAL_BACKEND_HOST);
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
};
