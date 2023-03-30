const url = "https://641523a54f32ca32918f7bb9.mockapi.io/users"

export const post = async (body) => {
    try {
        //dentro del try va a intentar hacer algo, si ese algo falla entra al catch
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            alert("Hubo un error inesperado");
            return;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};