# 🧩 Proyecto Final de Back-End - 4Geeks Academy España

Este fue el último proyecto del módulo de **Back-End en 4Geeks Academy España** 🚀  
Un desafío Full Stack que combina desarrollo de **Front-end y Back-end** para construir un sistema de autenticación completo usando **React.js** y **Flask** 👾

---

## 🔐 Sistema de Autenticación

Este proyecto incluye un flujo de usuario completo:

- ✅ **Registro**: Crear una cuenta con correo electrónico y contraseña  
- 🔐 **Inicio de sesión**: Autenticación segura utilizando **JWT**  
- 🎯 **Cerrar sesión**: Elimina el token y redirige a la página de login  
- 🛢️ **Gestión de base de datos** con **SQLAlchemy**  
- 🗂️ **Almacenamiento de tokens** en el Front-end mediante **LocalStorage**

---

## 🔄 Flujo de Refresh Token

Para mejorar la experiencia del usuario, se implementó un **mecanismo de refresh token**:  
Si el token de acceso expira, se solicita automáticamente uno nuevo — sin necesidad de que el usuario inicie sesión nuevamente.

---

## 🔒 Rutas Protegidas

Una vez autenticado, el usuario puede:

- Acceder a **rutas privadas**
- Ver **información protegida** validada mediante token
- Ser redirigido al login si el token es inválido o ha expirado

---

## 🏫 Bonus: Página del Campus de 4Geeks (Simplificada)

Como extra visual 🏆, se recreó una versión simplificada de la **página del campus de 4Geeks Academy** utilizando **React**, incluyendo imágenes para lograr una interfaz más atractiva y amigable.

---

## 🧠 Aprendizajes Clave

Este proyecto ayudó a profundizar conocimientos en:

- Autenticación de usuarios y gestión de sesiones
- Seguridad con JWT
- Integración Frontend-Backend con **React & Flask**
- Interacciones con bases de datos usando **SQLAlchemy**
- Impleme

