@extends('layout')

@section('title', 'Editar Producto')

@section('main')

    <div class="page-header">
        <div>
            <h1 class="page-title">Editar <span>Producto</span></h1>
            <p class="page-sub">Modifica los datos de {{ $product->name }}</p>
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
            <form action="{{ route('prod.update', $product->id_product) }}" method="POST">
                @csrf
                @method('PUT')

                <div class="form-group">
                    <label for="name" class="form-label">Nombre del producto</label>
                    <input type="text" name="name" id="name" class="form-control"
                           value="{{ old('name', $product->name) }}" required autofocus>
                </div>

                <div class="form-group">
                    <label for="description" class="form-label">Descripción</label>
                    <textarea name="description" id="description" class="form-control"
                              rows="4">{{ old('description', $product->description) }}</textarea>
                    <span class="form-hint">Opcional.</span>
                </div>

                <div class="form-group">
                    <label for="price" class="form-label">Precio (USD)</label>
                    <input type="number" name="price" id="price" class="form-control"
                           value="{{ old('price', $product->price) }}" step="0.01" min="0" required>
                </div>

                <div class="form-footer">
                    <button type="submit" class="btn btn-primary">
                        <i class="ti ti-check" aria-hidden="true"></i> Actualizar
                    </button>
                    <a href="{{ route('prod.show', $product->id_product) }}" class="btn btn-secondary">Cancelar</a>
                </div>
            </form>
        </div>
    </div>

@endsection