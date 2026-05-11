@extends('layout')

@section('title', 'Productos')

@section('main')

    <div class="page-header">
        <div>
            <h1 class="page-title">Mis <span>Productos</span></h1>
            <p class="page-sub">Gestiona tu catálogo de productos</p>
        </div>
        <a href="{{ route('prod.create') }}" class="btn btn-primary">
            <i class="ti ti-plus" aria-hidden="true"></i> Nuevo producto
        </a>
    </div>

    @if(session('success'))
        <div class="alert alert-success">
            <i class="ti ti-circle-check" aria-hidden="true"></i>
            {{ session('success') }}
        </div>
    @endif

    @if(isset($products) && count($products) > 0)

        {{-- Stats --}}
        <div class="stats-strip">
            <div class="stat-card animate-in">
                <div class="stat-label">Total productos</div>
                <div class="stat-value green">{{ count($products) }}</div>
            </div>
            <div class="stat-card animate-in">
                <div class="stat-label">Valor inventario</div>
                <div class="stat-value blue">${{ number_format($products->sum('price'), 2) }}</div>
            </div>
            <div class="stat-card animate-in">
                <div class="stat-label">Precio promedio</div>
                <div class="stat-value yellow">${{ number_format($products->avg('price'), 2) }}</div>
            </div>
        </div>

        {{-- Grid --}}
        <div class="products-grid">
            @foreach($products as $product)
                <div class="prod-card animate-in">
                    <div class="prod-card-img" style="background: hsl({{ ($loop->index * 47) % 360 }}, 25%, 12%)">
                        @php
                            $emojis = ['📦','🎧','💻','🖥️','⌨️','🖱️','📱','🎮','📷','🔊','⌚','🖨️'];
                            echo $emojis[$loop->index % count($emojis)];
                        @endphp
                    </div>
                    <div class="prod-card-body">
                        <div class="prod-card-meta">
                            <span class="prod-cat">Producto</span>
                            @if($loop->first)
                                <span class="badge badge-new">Nuevo</span>
                            @elseif($loop->index % 3 === 0)
                                <span class="badge badge-hot">Popular</span>
                            @endif
                        </div>
                        <h5 class="prod-name">{{ $product->name }}</h5>
                        <p class="prod-desc">{{ $product->description ?: 'Sin descripción disponible.' }}</p>
                        <div class="prod-price">${{ number_format($product->price, 2) }}</div>
                        <div class="prod-actions">
                            <a href="{{ route('prod.show', $product->id_product) }}" class="btn btn-info btn-sm">
                                <i class="ti ti-eye" aria-hidden="true"></i> Ver
                            </a>
                            <a href="{{ route('prod.edit', $product->id_product) }}" class="btn btn-warning btn-sm">
                                <i class="ti ti-edit" aria-hidden="true"></i> Editar
                            </a>
                            <form action="{{ route('prod.destroy', $product->id_product) }}" method="POST" style="display:inline"
                                  onsubmit="return confirm('¿Eliminar este producto?')">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger btn-sm">
                                    <i class="ti ti-trash" aria-hidden="true"></i> Eliminar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>

    @else
        <div class="empty-state">
            <div class="empty-icon"><i class="ti ti-package-off" aria-hidden="true"></i></div>
            <h3>Sin productos aún</h3>
            <p>Crea tu primer producto para comenzar a gestionar el catálogo.</p>
            <a href="{{ route('prod.create') }}" class="btn btn-primary">
                <i class="ti ti-plus" aria-hidden="true"></i> Crear primer producto
            </a>
        </div>
    @endif

@endsection