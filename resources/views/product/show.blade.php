@extends('layout')

@section('title')
    Ver Producto
@endsection

@section('main')
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h1>Ver Producto</h1>
        <a href="{{ route('prod.index') }}" class="btn btn-secondary">Volver</a>
    </div>

    <div class="card">
        <div class="card-body">
            <h3>{{ $product->name }}</h3>
            <p>{{ $product->description }}</p>
            <p><strong>Precio:</strong> ${{ $product->price }}</p>
        </div>
    </div>
@endsection