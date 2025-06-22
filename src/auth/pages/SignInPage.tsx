import React, { useState } from 'react';
import { InputFieldComponent } from '../components/InputFieldComponent';

export const SignInPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<{
    password?: string;
    general?: string;
  }>({});

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí podrías agregar lógica de validación
    if (!formData.email || !formData.password) {
      setErrors({
        general: 'Todos los campos son obligatorios',
        password: !formData.password ? 'La contraseña es obligatoria' : undefined,
      });
      return;
    }

    // Aquí iría la lógica de envío (ej. API call)
    console.log('Iniciando sesión con:', formData);
    setErrors({}); // limpiar errores si todo va bien
  };

  return (
    <main className="w-full h-[100dvh] px-4 sm:px-8 md:px-10 lg:px-16 py-4 flex flex-col justify-center items-center gap-2">
      <h1 className="text-(--title-color) font-bebas-neue text-center text-8xl">YOURBONO</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-160 mx-auto mt-10">
        <InputFieldComponent
          value={formData.email}
          placeholder="Correo electrónico"
          type="email"
          autocomplete="email"
          onChange={(value) => handleChange('email', value)}
        />
        <InputFieldComponent
          value={formData.password}
          placeholder="Contraseña"
          type="password"
          autocomplete="current-password"
          error={errors.password}
          onChange={(value) => handleChange('password', value)}
        />
        <button
          type="submit"
          className="bg-(--button-color) text-white p-4 rounded-md hover:cursor-pointer"
        >
          Iniciar sesión
        </button>

        {errors.general && (
          <span className="text-white text-sm text-center">{errors.general}</span>
        )}

        <p className="text-center text-base text-white">¿Aún no tienes una cuenta?</p>
        <div className="w-full h-0.5 bg-white" />
        <button
          type="button"
          className="bg-(--button-color) text-white p-4 rounded-md hover:cursor-pointer"
        >
          Regístrate
        </button>
      </form>
    </main>
  );
};