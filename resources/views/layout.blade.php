<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title') — DemoLaravel</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.47.0/tabler-icons.min.css">
    <style>
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
            --bg:        #0d0f14;
            --surface:   #141720;
            --surface2:  #1c2030;
            --surface3:  #232840;
            --border:    rgba(255,255,255,0.07);
            --border2:   rgba(255,255,255,0.13);
            --accent:    #6ee7b7;
            --accent2:   #38bdf8;
            --danger:    #f87171;
            --warning:   #fbbf24;
            --purple:    #a78bfa;
            --text:      #f1f5f9;
            --text2:     #94a3b8;
            --muted:     #475569;
            --radius:    12px;
            --radius-lg: 16px;
            --font-head: 'Syne', sans-serif;
            --font-body: 'DM Sans', sans-serif;
        }
        html, body { height: 100%; }
        body { background: var(--bg); color: var(--text); font-family: var(--font-body); font-weight: 300; font-size: 14px; line-height: 1.6; min-height: 100vh; display: flex; flex-direction: column; }

        /* Topbar */
        .topbar { height: 56px; display: flex; align-items: center; justify-content: space-between; padding: 0 1.5rem; background: var(--surface); border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 200; flex-shrink: 0; }
        .topbar-brand { font-family: var(--font-head); font-weight: 800; font-size: 1.1rem; letter-spacing: -0.03em; text-decoration: none; color: var(--accent); }
        .topbar-brand span { color: var(--text); }
        .topbar-right { display: flex; align-items: center; gap: 1rem; font-size: 12px; color: var(--text2); }
        .topbar-badge { background: var(--surface2); border: 1px solid var(--border2); border-radius: 20px; padding: 3px 10px; font-size: 11px; color: var(--accent); font-weight: 500; }

        /* Layout */
        .app-wrapper { display: flex; flex: 1; overflow: hidden; }

        /* Sidebar */
        .sidebar { width: 220px; flex-shrink: 0; background: var(--surface); border-right: 1px solid var(--border); padding: 1.25rem 0.875rem; display: flex; flex-direction: column; gap: 2px; overflow-y: auto; }
        .sidebar-section { font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); padding: 1rem 0.625rem 0.35rem; }
        .sidebar a { display: flex; align-items: center; gap: 9px; padding: 7px 10px; border-radius: 8px; color: var(--text2); text-decoration: none; font-size: 13px; font-weight: 400; transition: background 0.15s, color 0.15s; }
        .sidebar a i { font-size: 15px; width: 18px; text-align: center; flex-shrink: 0; }
        .sidebar a:hover { background: var(--surface2); color: var(--text); }
        .sidebar a.active { background: var(--surface3); color: var(--accent); font-weight: 500; }
        .sidebar-divider { height: 1px; background: var(--border); margin: 0.5rem 0; }

        /* Main */
        .main { flex: 1; overflow-y: auto; padding: 2rem 2.25rem; display: flex; flex-direction: column; }

        /* Page header */
        .page-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 1.75rem; gap: 1rem; }
        .page-title { font-family: var(--font-head); font-weight: 800; font-size: 1.75rem; letter-spacing: -0.04em; line-height: 1; }
        .page-title span { color: var(--accent); }
        .page-sub { font-size: 12px; color: var(--text2); margin-top: 4px; }

        /* Alerts */
        .alert { padding: 10px 14px; border-radius: var(--radius); font-size: 13px; margin-bottom: 1.25rem; display: flex; align-items: flex-start; gap: 8px; }
        .alert i { font-size: 16px; flex-shrink: 0; margin-top: 1px; }
        .alert-success { background: rgba(110,231,183,.1); border: 1px solid rgba(110,231,183,.3); color: var(--accent); }
        .alert-danger  { background: rgba(248,113,113,.1); border: 1px solid rgba(248,113,113,.3); color: var(--danger); }
        .alert ul { padding-left: 1rem; }

        /* Buttons */
        .btn { display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; border-radius: 8px; font-family: var(--font-body); font-size: 13px; font-weight: 500; border: none; cursor: pointer; text-decoration: none; transition: all 0.15s; white-space: nowrap; }
        .btn i { font-size: 15px; }
        .btn-primary  { background: var(--accent); color: #0a1a12; }
        .btn-primary:hover { background: #4ade80; color: #0a1a12; }
        .btn-secondary{ background: var(--surface2); color: var(--text); border: 1px solid var(--border2); }
        .btn-secondary:hover { background: var(--surface3); }
        .btn-info    { background: rgba(56,189,248,.12); color: var(--accent2); border: 1px solid rgba(56,189,248,.2); }
        .btn-info:hover { background: rgba(56,189,248,.22); }
        .btn-warning { background: rgba(251,191,36,.12); color: var(--warning); border: 1px solid rgba(251,191,36,.2); }
        .btn-warning:hover { background: rgba(251,191,36,.22); }
        .btn-danger  { background: rgba(248,113,113,.12); color: var(--danger); border: 1px solid rgba(248,113,113,.2); }
        .btn-danger:hover { background: rgba(248,113,113,.22); }
        .btn-sm { padding: 5px 10px; font-size: 12px; border-radius: 6px; }
        .btn-sm i { font-size: 13px; }

        /* Stats */
        .stats-strip { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 1.5rem; }
        .stat-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 14px 16px; }
        .stat-label { font-size: 10px; text-transform: uppercase; letter-spacing: .1em; color: var(--muted); margin-bottom: 5px; }
        .stat-value { font-family: var(--font-head); font-size: 1.5rem; font-weight: 800; letter-spacing: -0.03em; }
        .stat-value.green  { color: var(--accent); }
        .stat-value.blue   { color: var(--accent2); }
        .stat-value.yellow { color: var(--warning); }
        .stat-value.purple { color: var(--purple); }

        /* Product grid */
        .products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px; }

        /* Product card */
        .prod-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; transition: border-color 0.2s, transform 0.2s; display: flex; flex-direction: column; }
        .prod-card:hover { border-color: var(--border2); transform: translateY(-3px); }
        .prod-card-img { height: 110px; display: flex; align-items: center; justify-content: center; font-size: 2.8rem; flex-shrink: 0; }
        .prod-card-body { padding: 14px 16px; flex: 1; display: flex; flex-direction: column; }
        .prod-card-meta { display: flex; align-items: center; justify-content: space-between; margin-bottom: 5px; }
        .prod-cat { font-size: 10px; text-transform: uppercase; letter-spacing: .1em; color: var(--muted); }
        .badge { display: inline-block; padding: 2px 7px; border-radius: 4px; font-size: 10px; font-weight: 600; letter-spacing: .04em; }
        .badge-new  { background: rgba(110,231,183,.15); color: var(--accent);  border: 1px solid rgba(110,231,183,.25); }
        .badge-hot  { background: rgba(251,191,36,.15);  color: var(--warning); border: 1px solid rgba(251,191,36,.25); }
        .badge-sale { background: rgba(248,113,113,.15); color: var(--danger);  border: 1px solid rgba(248,113,113,.25); }
        .prod-name { font-family: var(--font-head); font-weight: 700; font-size: 15px; margin-bottom: 5px; line-height: 1.3; }
        .prod-desc { font-size: 12px; color: var(--text2); line-height: 1.55; flex: 1; margin-bottom: 10px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .prod-price { font-family: var(--font-head); font-size: 1.25rem; font-weight: 800; color: var(--accent); letter-spacing: -0.02em; margin-bottom: 10px; }
        .prod-actions { display: flex; gap: 6px; flex-wrap: wrap; }

        /* Empty state */
        .empty-state { text-align: center; padding: 5rem 2rem; color: var(--text2); }
        .empty-icon { font-size: 3.5rem; color: var(--muted); margin-bottom: 1rem; }
        .empty-state h3 { font-family: var(--font-head); font-size: 1.1rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--text); }
        .empty-state p { font-size: 13px; margin-bottom: 1.5rem; }

        /* Detail */
        .detail-wrap { max-width: 580px; }
        .detail-hero { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 1.25rem; }
        .detail-img { height: 160px; display: flex; align-items: center; justify-content: center; font-size: 4rem; }
        .detail-body { padding: 1.5rem; }
        .detail-name { font-family: var(--font-head); font-weight: 800; font-size: 1.5rem; letter-spacing: -0.03em; margin-bottom: 0.5rem; }
        .detail-desc { font-size: 13px; color: var(--text2); line-height: 1.7; margin-bottom: 1.25rem; }
        .detail-price { font-family: var(--font-head); font-size: 2rem; font-weight: 800; color: var(--accent); letter-spacing: -0.04em; margin-bottom: 1.25rem; }
        .detail-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--border); font-size: 13px; }
        .detail-row:last-child { border-bottom: none; }
        .detail-key { color: var(--muted); font-size: 11px; text-transform: uppercase; letter-spacing: .08em; }
        .detail-actions { display: flex; gap: 8px; margin-top: 1.25rem; }

        /* Form */
        .form-wrap { max-width: 560px; }
        .form-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.75rem; }
        .form-group { margin-bottom: 1.1rem; }
        .form-label { display: block; font-size: 11px; font-weight: 500; letter-spacing: .08em; text-transform: uppercase; color: var(--text2); margin-bottom: 6px; }
        .form-control { width: 100%; background: var(--surface2); border: 1px solid var(--border2); border-radius: 8px; padding: 9px 12px; color: var(--text); font-family: var(--font-body); font-size: 14px; font-weight: 300; outline: none; transition: border-color 0.15s, background 0.15s; }
        .form-control:focus { border-color: var(--accent); background: var(--surface3); }
        .form-control::placeholder { color: var(--muted); }
        textarea.form-control { resize: vertical; line-height: 1.6; }
        .form-hint { font-size: 11px; color: var(--muted); margin-top: 4px; }
        .form-footer { display: flex; gap: 8px; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border); }

        /* Footer */
        .app-footer { padding: 0.75rem 2.25rem; border-top: 1px solid var(--border); font-size: 11px; color: var(--muted); display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; }

        /* Animations */
        @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-in { animation: fadeUp 0.3s ease both; }
        .animate-in:nth-child(1){animation-delay:.04s}.animate-in:nth-child(2){animation-delay:.08s}.animate-in:nth-child(3){animation-delay:.12s}
        .animate-in:nth-child(4){animation-delay:.16s}.animate-in:nth-child(5){animation-delay:.20s}.animate-in:nth-child(6){animation-delay:.24s}
        .animate-in:nth-child(7){animation-delay:.28s}.animate-in:nth-child(8){animation-delay:.32s}.animate-in:nth-child(9){animation-delay:.36s}
    </style>
</head>
<body>

<header class="topbar">
    <a href="{{ route('prod.index') }}" class="topbar-brand">demo<span>laravel</span></a>
    <div class="topbar-right">
        <span>Apliweb · Unicauca</span>
        <span class="topbar-badge">Laravel 13</span>
    </div>
</header>

<div class="app-wrapper">
    <nav class="sidebar">
        <span class="sidebar-section">Principal</span>
        <a href="{{ route('prod.index') }}" class="{{ request()->routeIs('prod.index') ? 'active' : '' }}">
            <i class="ti ti-package" aria-hidden="true"></i> Productos
        </a>
        <a href="{{ route('prod.create') }}" class="{{ request()->routeIs('prod.create') ? 'active' : '' }}">
            <i class="ti ti-circle-plus" aria-hidden="true"></i> Nuevo producto
        </a>
        <div class="sidebar-divider"></div>
        <span class="sidebar-section">Sistema</span>
        <a href="#"><i class="ti ti-users" aria-hidden="true"></i> Usuarios</a>
        <a href="#"><i class="ti ti-settings" aria-hidden="true"></i> Configuración</a>
    </nav>

    <main class="main">
        @section('main')
        @show
    </main>
</div>

<footer class="app-footer">
    <span>Support by: Apliweb. 2026</span>
    <span>PHP {{ PHP_VERSION }}</span>
</footer>

</body>
</html>