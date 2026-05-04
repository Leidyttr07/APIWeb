@extends('layout.projects')

@section('title')
    Product List
@endsection

@section('main')
    <h1>Product List</h1>
    @if(isset($products) && count($products) > 0)
        @foreach($products as $product)
            <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
            <div class="card-body p-0">
                <div class="d-flex align-items-center">
                    <div class="p-5">
                        <h2 class="fw-bolder">{{ $product->name }}</h2>
                        <p>{{ $product->description }}</p>
                        <p>Price: ${{ $product->price }}</p>
                    </div>
                    <img class="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                </div>
            </div>
        @endforeach
    @else
        <p>No products available.</p>
    @endif
</div>

@endsection
