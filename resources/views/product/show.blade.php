@extends('layout')

@section('title', 'Ver Producto')

@section('main')

    <div class="page-header">
        <div>
            <h1 class="page-title">Detalle del <span>Producto</span></h1>
            <p class="page-sub">Información completa</p>
        </div>
        <a href="{{ route('prod.index') }}" class="btn btn-secondary">
            <i class="ti ti-arrow-left" aria-hidden="true"></i> Volver
        </a>
    </div>

    <div class="detail-wrap animate-in">
        <div class="detail-hero">
            @php
                $emojis = ['📦','🎧','💻','🖥️','⌨️','🖱️','📱','🎮','📷','🔊'];
                $emoji  = $emojis[$product->id_product % count($emojis)];
            @endphp
            <div class="detail-img" style="background: hsl({{ ($product->id_product * 47) % 360 }}, 25%, 12%)">
                {{ $emoji }}
            </div>
            <div class="detail-body">
                <h2 class="detail-name">{{ $product->name }}</h2>
                <p class="detail-desc">{{ $product->description ?: 'Sin descripción disponible.' }}</p>
                <div class="detail-price">${{ number_format($product->price, 2) }}</div>

                <div class="detail-row">
                    <span class="detail-key">ID producto</span>
                    <span># {{ $product->id_product }}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-key">Precio</span>
                    <span style="color: var(--accent); font-weight: 600;">${{ number_format($product->price, 2) }} USD</span>
                </div>
                <div class="detail-row">
                    <span class="detail-key">Estado</span>
                    <span class="badge badge-new">Activo</span>
                </div>

                <div class="detail-actions">
                    <a href="{{ route('prod.edit', $product->id_product) }}" class="btn btn-warning">
                        <i class="ti ti-edit" aria-hidden="true"></i> Editar
                    </a>
                    <form action="{{ route('prod.destroy', $product->id_product) }}" method="POST" style="display:inline"
                          onsubmit="return confirm('¿Eliminar este producto?')">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-danger">
                            <i class="ti ti-trash" aria-hidden="true"></i> Eliminar
                        </button>
                    </form>
                    <a href="{{ route('prod.index') }}" class="btn btn-secondary">
                        <i class="ti ti-layout-grid" aria-hidden="true"></i> Ver todos
                    </a>
                </div>
            </div>
        </div>
    </div>

@endsection