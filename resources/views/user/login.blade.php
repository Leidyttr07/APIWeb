@extends('layout.index')

@section('title')
    Iniciar Sesión
@endsection

@section('main')
    <div class="container">
        <h1>Iniciar Sesión</h1>

        @if(session('success'))
            <div class="alert alert-success">{{ session('success') }}</div>
        @endif

        @if($errors->any())
            <div class="alert alert-danger">
                <ul class="mb-0">
                    @foreach($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <form method="POST" action="{{ route('login') }}">
            @csrf
            <div class="form-group mb-3">
                <label for="email">Correo electrónico:</label>
                <input type="email" class="form-control" id="email" name="email" value="{{ old('email') }}" required>
            </div>
            <div class="form-group mb-3">
                <label for="password">Contraseña:</label>
                <input type="password" class="form-control" id="password" name="password" required>
            </div>
            <button type="submit" class="btn btn-primary">Ingresar</button>
        </form>

        <div class="alert alert-secondary mt-4">
            Usa estos datos de prueba:
            <ul class="mb-0">
                <li><strong>Email:</strong> javhur@unicauca.edu.co</li>
                <li><strong>Contraseña:</strong> 1234</li>
            </ul>
        </div>
    </div>
@endsection