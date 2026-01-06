import React, { useEffect, useState } from 'react'

export default function Sessionstorage() {
  const [state, setState] = useState({
    name: "",
    email: ""
  })

  const [data, setData] = useState(() => {
    const saveData = JSON.parse(sessionStorage.getItem("data"))
    return saveData || []
  })

  useEffect(() => {
    sessionStorage.setItem("data", JSON.stringify(data))
  }, [data])

  function SubmitForm(e) {
    e.preventDefault()
    setData([...data, state])
    setState({ name: "", email: "" })
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Session Storage</h1>

        <form onSubmit={SubmitForm} style={styles.form}>
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            value={state.name}
            onChange={(e) =>
              setState({ ...state, name: e.target.value })
            }
            style={styles.input}
            placeholder="Enter your name"
            required
          />

          <label style={styles.label}>Email Address</label>
          <input
            type="email"
            value={state.email}
            onChange={(e) =>
              setState({ ...state, email: e.target.value })
            }
            style={styles.input}
            placeholder="Enter your email"
            required
          />

          <button type="submit" style={styles.button}>
            Save Data
          </button>
        </form>

        <ul style={styles.list}>
          {data.map((el, index) => (
            <li key={index} style={styles.listItem}>
              <span style={styles.name}>{el.name}</span>
              <span style={styles.email}>{el.email}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    width: "380px",
    background: "#ffffff",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#4f46e5"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  label: {
    fontSize: "14px",
    fontWeight: "600"
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    outline: "none"
  },
  button: {
    marginTop: "15px",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(135deg, #4f46e5, #6366f1)",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer"
  },
  list: {
    marginTop: "20px",
    padding: 0
  },
  listItem: {
    listStyle: "none",
    background: "#f9fafb",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "8px",
    display: "flex",
    flexDirection: "column"
  },
  name: {
    fontWeight: "600"
  },
  email: {
    fontSize: "13px",
    color: "#6b7280"
  }
}
