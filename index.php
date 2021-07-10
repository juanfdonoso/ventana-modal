<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ventana modal</title>
    <link rel='stylesheet' type="text/css" href="estilos.css">
    <script src="https://kit.fontawesome.com/5637dd924f.js" crossorigin="anonymous"></script>
    <script language="javascript" src="scripts.js"></script>
</head>
<body>
    <?php
    include "../conexion.php";
    ?>
    <h1 class="titulo">Ejemplo ventana modal</h1>
    <button type="button" class="boton" onClick="mostrarVentana('vm1')">Ventana 1</button>
    <br><br>
    <button type="button" class="boton" onClick="mostrarVentana('vm2')">Ventana 2</button>
    <br><br>
    <button type="button" class="boton" onClick="mostrarVentana('vm3')">Ventana 3</button>
    <br><br>
    <button type="button" class="boton" onClick="mostrarVentana('vm4')">Ventana 4</button>
    
    <?php
    $sql = "select * from juan_ventanaModal";
    $rs = ejecutar($sql);

    $k = 1; //contador para definir los ids de cada ventana modal que se va a generar
    while($datos = mysqli_fetch_array($rs)){
        echo '<div class="ventanaModal" id="vm'.$k.'">';
        echo '<div class="botonera">';
        echo '<button type="button" class="botonCerrar" onClick=cerrarVentanaModal("vm'.$k.'")><i class="fas fa-window-close"></i></button>';
        echo '</div>';
        echo '<div class="titulo">'.$datos["titulo"].'</div>';
        echo '<div class="texto">'.$datos["texto"].'</div>';
        echo '</div>';
        $k++;

    }
    ?>

    <div class="pantallaBloqueo" id="pb"></div>
    
</body>
</html>