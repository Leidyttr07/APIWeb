@extends('layout')

@section('title')
    Lista de Productos
@endsection

@section('main')
    <h1>Lista de Productos</h1>
    <a href="{{ route('prod.create') }}" class="btn btn-primary mb-3">Crear Producto</a>
    @if(session('success'))
        <div class="alert alert-success">{{ session('success') }}</div>
    @endif
    @if(isset($products) && count($products) > 0)
        <div class="row">
            @foreach($products as $product)
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{ $product->name }}</h5>
                            <p class="card-text">{{ $product->description }}</p>
                            <p class="card-text">Precio: ${{ $product->price }}</p>
                            <a href="{{ route('prod.show', $product->id_product) }}" class="btn btn-info">Ver</a>
                            <a href="{{ route('prod.edit', $product->id_product) }}" class="btn btn-warning">Editar</a>
                            <form action="{{ route('prod.destroy', $product->id_product) }}" method="POST" class="d-inline">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger" onclick="return confirm('¿Estás seguro?')">Eliminar</button>
                            </form>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    @else
        <p>No hay productos disponibles.</p>
    @endif
@endsection
