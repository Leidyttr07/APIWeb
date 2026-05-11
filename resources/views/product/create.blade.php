@extends('layout')

@section('title', 'Nuevo Producto')

@section('main')

    <div class="page-header">
        <div>
            <h1 class="page-title">Nuevo <span>Producto</span></h1>
            <p class="page-sub">Completa los campos para agregar al catálogo</p>
        </div>
        <a href="{{ route('prod.index') }}" class="btn btn-secondary">
            <i class="ti ti-arrow-left" aria-hidden="true"></i> Volver
        </a>
    </div>

    @if ($errors->any())
        <div class="alert alert-danger">
            <i class="ti ti-alert-circle" aria-hidden="true"></i>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <div class="form-wrap">
        <div class="form-card animate-in">
            <form action="{{ route('prod.store') }}" method="POST">
                @csrf

                <div class="form-group">
                    <label for="name" class="form-label">Nombre del producto</label>
                    <input type="text" name="name" id="name" class="form-control"
                           value="{{ old('name') }}" placeholder="Ej: Sony WH-1000XM5" required autofocus>
                </div>

                <div class="form-group">
                    <label for="description" class="form-label">Descripción</label>
                    <textarea name="description" id="description" class="form-control" rows="4"
                              placeholder="Describe las características del producto...">{{ old('description') }}</textarea>
                    <span class="form-hint">Opcional. Una buena descripción ayuda a identificar el producto.</span>
                </div>

                <div class="form-group">
                    <label for="price" class="form-label">Precio (USD)</label>
                    <input type="number" name="price" id="price" class="form-control"
                           value="{{ old('price') }}" step="0.01" min="0" placeholder="0.00" required>
                </div>

                <div class="form-footer">
                    <button type="submit" class="btn btn-primary">
                        <i class="ti ti-device-floppy" aria-hidden="true"></i> Guardar producto
                    </button>
                    <a href="{{ route('prod.index') }}" class="btn btn-secondary">Cancelar</a>
                </div>
            </form>
        </div>
    </div>

@endsection