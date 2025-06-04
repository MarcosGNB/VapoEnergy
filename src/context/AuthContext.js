import { createContext, useContext, useState, useEffect } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// ⚠️ Reemplaza solo si cambiaste los datos en Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBPe7UU9fArPpVzgYkfksFc-G9bipW7_qY",
  authDomain: "vapoenergy-4c824.firebaseapp.com",
  projectId: "vapoenergy-4c824",
  storageBucket: "vapoenergy-4c824.appspot.com", // 🔧 corregido
  messagingSenderId: "749232667899",
  appId: "1:749232667899:web:aaf5fb7e2ba567ea4a845e",
  measurementId: "G-NC37DZCRKG"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // 🔧 ESTO FALTABA
const analytics = getAnalytics(app);
const googleProvider = new GoogleAuthProvider();

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          email: currentUser.email,
          name: currentUser.displayName || '',
          uid: currentUser.uid,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (error) {
      console.error('Login error:', error.code, error.message);
      return { success: false, message: mapFirebaseError(error) };
    }
  };

  const register = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (error) {
      console.error('Register error:', error.code, error.message);
      return { success: false, message: mapFirebaseError(error) };
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      return { success: true };
    } catch (error) {
      console.error('Google login error:', error.code, error.message);
      return { success: false, message: mapFirebaseError(error) };
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      register,
      loginWithGoogle,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

// Mapeador de errores a mensajes amigables
function mapFirebaseError(error) {
  switch (error.code) {
    case 'auth/user-not-found':
      return 'No existe una cuenta con este correo.';
    case 'auth/wrong-password':
      return 'La contraseña es incorrecta.';
    case 'auth/email-already-in-use':
      return 'Ya existe una cuenta con este correo.';
    case 'auth/invalid-email':
      return 'Correo inválido.';
    case 'auth/weak-password':
      return 'La contraseña es muy débil. Usa al menos 6 caracteres.';
    case 'auth/popup-closed-by-user':
      return 'El inicio de sesión fue cancelado.';
    default:
      return 'Ocurrió un error inesperado. Intenta de nuevo.';
  }
}
