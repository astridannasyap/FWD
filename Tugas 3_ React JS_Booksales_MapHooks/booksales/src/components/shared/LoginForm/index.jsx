const LoginForm = () => {
    const styles ={
        form: {
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            maxWidth: "300px",
            margin: "auto",
        },

        input: {
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
        },  

        button: {
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
        },

    };

    return (
        <form style={styles.form}>
            <input style={styles.input} type="text" placeholder="Username" />
            <input style={styles.input} type="email" placeholder="Email" />
            <input style={styles.input} type="password" placeholder="Password" />
            <button style={styles.button} type="submit">Login</button>
        </form>
    
        );
};

export default LoginForm