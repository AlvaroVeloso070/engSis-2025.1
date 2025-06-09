# Sistema de Viabilidade Financeira para Obras de Engenharia Civil

Este projeto foi desenvolvido como parte da disciplina de Engenharia de Sistemas da Universidade Federal de Goiás (UFG) no semestre 2025.1.

## Sobre o Projeto

O sistema consiste em um módulo de integração a um sistema de gerenciamento de viabilidade financeira em obras de engenharia civil. Este módulo é responsável pelo cálculo de viabilidade do solo, considerando diversos fatores ambientais e geológicos que afetam o custo por metro quadrado da obra.

## Regras de Cálculo de Viabilidade

O sistema calcula o valor por metro quadrado de uma obra baseando-se em um valor base e em acréscimos percentuais determinados por diferentes características do terreno.

**Valor base por m²**: R$ 80,00

A fórmula geral utilizada é:
```
VALOR M² = VALOR_BASE + (VALOR_BASE * ∑ acréscimos)
VALOR DA OBRA = AREA TOTAL * VALOR M²
```

### Tabela de Acréscimos

| Fator | Condição              | Acréscimo |
|-------|-----------------------|-----------|
| **Altimetria/Elevação (Δ)** | 0 ≤ Δ < 10 metros     | 5% |
|  | 10 ≤ Δ < 20 metros    | 10% |
|  | 20 ≤ Δ < 30 metros    | 12% |
|  | 30 ≤ Δ < 40 metros    | 15% |
|  | Δ ≥ 40 metros         | 20% |
| **Tipo de Solo** | Arenoso               | 10% |
|  | Siltoso               | 12% |
|  | Argiloso              | 15% |
|  | Rochoso/Pedregoso     | 17% |
| **Umidade do Solo** | 0% ≤ umidade < 2%     | 5% |
|  | 2% ≤ umidade < 6%     | 10% |
|  | 6% ≤ umidade < 10%    | 12% |
|  | umidade ≥ 10%         | 20% |
| **Pressão Atmosférica** | < 950 hPa             | 25% |
|  | 950 ≤ pressao < 980   | 15% |
|  | 980 ≤ pressao < 1020  | 0% (normal) |
|  | 1020 ≤ pressao < 1050 | 10% |
|  | pressao ≥ 1050        | 20% |

## Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| Java | 21     | Linguagem de programação principal da API |
| Spring Boot | 3.2.x  | Framework para desenvolvimento da API REST |
| Next.js | 14.x   | Framework React para o frontend |
| TypeScript | 5.x    | Superset tipado de JavaScript |
| Docker | 24.x   | Contêineres para aplicação |
| Docker Compose | 2.x    | Orquestração de contêineres |
| Maven | 3.9.x  | Gerenciador de dependências e build do Java |
| Tailwind CSS | 3.x    | Framework CSS para estilização |

## API Endpoints

A API disponibiliza os seguintes endpoints para acesso às funcionalidades do sistema:

### Viabilidade Financeira
- **POST /viability**
  - Descrição: Calcula a viabilidade financeira da obra com base nos dados fornecidos
  - Payload: 
    ```json
    {
      "totalLandArea": 500,    // Área total da obra em m²
      "soilType": "SANDY",     // Tipo de solo: SANDY, SILTY, CLAY ou ROCKY
      "soilMoisture": 4.5,     // Umidade do solo em percentual
      "highestPoint": 45.3,    // Ponto mais alto do terreno em metros
      "lowestPoint": 12.8,     // Ponto mais baixo do terreno em metros
      "hPa": 1013.5            // Preessão atimosférica em hectopascal (hPa)
    }
    ```
  - Resposta:
    ```json
    {
      "totalCost": 21763123.54, // Custo total estimado da obra em reais
      "costPerM2": 127.25       // Custo estimado por metro quadrado em reais
    }
    ```

### Análise do Solo
- **GET /soil**
  - Descrição: Retorna dados da análise de solo da localização atual
  - Resposta:
    ```json
    {
      "soilType": "CLAY",      // Tipo de solo identificado
      "soilMoisture": 5.7      // Percentual de umidade do solo
    }
    ```

### Barometria
- **GET /barometry**
  - Descrição: Retorna dados da pressão atmosférica no local da obra
  - Resposta:
    ```json
    {
      "hPa": 1013.2       // Pressão atmosférica em hectopascal (hPa)
    }
    ```

### Altimetria
- **GET /altimetry**
  - Descrição: Retorna dados da elevação do terreno
  - Resposta:
    ```json
    {
      "totalLandArea": 1200.5  // Área total da obra em metros quadrados
      "highestPoint": 45.3,    // Ponto mais alto em metros
      "lowestPoint": 12.8      // Ponto mais baixo em metros
    }
    ```

## Estrutura do Projeto

O sistema é dividido em dois componentes principais:

### API (Backend)
Desenvolvida em Java com Spring Boot, responsável pelos cálculos de viabilidade e integração com sensores de análise de solo, barométricos e altimétricos.

### UI (Frontend)
Desenvolvido com Next.js e TypeScript, fornece uma interface amigável para visualização e interação com os dados de viabilidade.

## Como Executar

Para executar o projeto localmente, utilize o Docker Compose:

```bash
docker-compose up -d
```

A aplicação estará disponível em:
- Frontend: http://localhost:3000
- API: http://localhost:8080/api

## Contribuidores

Este projeto foi desenvolvido pelos alunos da disciplina de Engenharia de Sistemas da UFG no semestre 2025.1.
