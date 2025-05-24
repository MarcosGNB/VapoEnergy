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
import { initializeApp } from 'firebase/app';

// ⚠️ Reemplaza estos valores con los de tu proyecto en Firebase Console
const firebaseConfig = {
  apiKey: 'TU_API_KEY',
  authDomain: 'TU_AUTH_DOMAIN',
  projectId: 'TU_PROJECT_ID',
  appId: 'TU_APP_ID',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Opcional: para controlar el estado inicial

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

  // 🔐 Iniciar sesión con email/contraseña
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (error) {
      console.error('Login error:', error.code, error.message);
      return { success: false, message: mapFirebaseError(error) };
    }
  };

  // 🆕 Crear cuenta
  const register = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (error) {
      console.error('Register error:', error.code, error.message);
      return { success: false, message: mapFirebaseError(error) };
    }
  };

  // 🔑 Login con Google
  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      return { success: true };
    } catch (error) {
      console.error('Google login error:', error.code, error.message);
      return { success: false, message: mapFirebaseError(error) };
    }
  };

  // 🔓 Cerrar sesión
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

// Hook personalizado para consumir el contexto
export const useAuth = () => useContext(AuthContext);

// Mapeador de errores de Firebase a mensajes más amigables
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
