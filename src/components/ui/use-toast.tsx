import { createContext, useContext, ReactNode } from "react"
import { ToastContainer, toast as toastLib } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

interface ToastContextType {
  toast: (options: { title: string; description?: string }) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: ReactNode }) {
  const toast = ({ title, description }: { title: string; description?: string }) => {
    toastLib(title, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      bodyClassName: "text-sm",
      className: "bg-white text-black shadow-lg rounded-md p-4",
      render: () => (
        <div>
          <strong>{title}</strong>
          {description && <p className="text-xs text-gray-500">{description}</p>}
        </div>
      ),
    })
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}
