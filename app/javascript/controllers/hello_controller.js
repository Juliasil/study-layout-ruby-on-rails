import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    //this.element.textContent = "Hello World!"
    this.element.innerHTML = `
    <table border="1">
    <thead>
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Endereço</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>João</td>
            <td>(123) 456-7890</td>
            <td>Rua A, 123</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Maria</td>
            <td>(987) 654-3210</td>
            <td>Avenida B, 456</td>
        </tr>
        <!-- Adicione mais linhas conforme necessário -->
    </tbody>
</table>
`
  }
}
