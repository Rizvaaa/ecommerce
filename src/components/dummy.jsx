const {data} = await axios.get("http://localhost:5000/users", {
    params: {email:form.email}