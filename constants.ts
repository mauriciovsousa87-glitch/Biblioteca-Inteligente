import { Machine } from './types';

// SVG Data URIs for offline/instant rendering of technical diagrams
// Base64 encoded to prevent Markdown parsing issues with spaces/characters

// Raw SVG for Steam Station - High Fidelity Isometric Approximation (Yellow Style)
const RAW_SVG_ESTACAO_VAPOR = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600' style='background-color:#fff;'>
  <defs>
    <linearGradient id="yellowPipe" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#fef08a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#facc15;stop-opacity:1" />
    </linearGradient>
    <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
      <feOffset dx="2" dy="2" result="offsetblur"/>
      <feMerge> 
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/> 
      </feMerge>
    </filter>
  </defs>
  
  <text x='400' y='40' text-anchor='middle' font-family='sans-serif' font-size='20' fill='#1e3a8a' font-weight='bold'>5.4.3 - Fluxo de vapor</text>
  <text x='700' y='60' text-anchor='middle' font-family='sans-serif' font-size='16' fill='#0ea5e9' font-weight='bold'>Estação de vapor</text>
  
  <!-- GROUPS FOR ISOMETRIC LAYERING -->
  
  <!-- 1. SKID BASE FRAME -->
  <g stroke="#713f12" stroke-width="1" fill="#fef9c3">
    <!-- Base Rectangle -->
    <path d="M100,450 L300,550 L750,450 L550,350 L100,450" fill="#fefce8" stroke-width="2"/>
    <!-- Front Face Thickness -->
    <path d="M100,450 L100,470 L300,570 L750,470 L750,450" fill="#fde047" stroke-width="2"/>
    
    <!-- Vertical Posts (Front) -->
    <rect x="120" y="250" width="10" height="200" fill="#fef08a" stroke="#ca8a04"/>
    <rect x="300" y="300" width="10" height="250" fill="#fef08a" stroke="#ca8a04"/>
    <rect x="500" y="300" width="10" height="150" fill="#fef08a" stroke="#ca8a04"/>
    <rect x="700" y="280" width="10" height="170" fill="#fef08a" stroke="#ca8a04"/>
  </g>

  <!-- 2. HEAT EXCHANGER (Left) - ITEM 3 -->
  <g transform="translate(100, 180)">
    <!-- Back Plate -->
    <path d="M20,20 L60,0 L60,250 L20,270 Z" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
    <!-- Plates Pack -->
    <path d="M30,25 L70,5 L70,255 L30,275 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="1"/>
    <path d="M35,27 L75,7 L75,257 Z" fill="#fef9c3" stroke="#ca8a04" stroke-width="1"/>
    <path d="M40,30 L80,10 L80,260 L40,280 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="1"/>
    <!-- Front Plate -->
    <path d="M50,35 L90,15 L90,265 L50,285 Z" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
    
    <!-- Connections -->
    <circle cx="70" cy="60" r="10" fill="#475569"/> <!-- Top Port -->
    <circle cx="70" cy="220" r="10" fill="#475569"/> <!-- Bottom Port -->

    <!-- Label 3 -->
    <line x1="20" y1="150" x2="-20" y2="150" stroke="#1e3a8a" stroke-width="2"/>
    <circle cx="-20" cy="150" r="14" fill="#fff" stroke="#1e3a8a" stroke-width="2"/>
    <text x="-20" y="155" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1e3a8a">3</text>
  </g>

  <!-- 3. MAIN STEAM LINE (Top Run) -->
  <g stroke="#4b5563" stroke-width="1">
    <!-- Inlet at Right -->
    <path d="M720,150 L720,280" fill="url(#yellowPipe)" stroke-width="2"/> <!-- Vertical Riser -->
    <ellipse cx="720" cy="150" rx="15" ry="5" fill="#fef9c3" stroke="#4b5563"/> <!-- Flange Top -->
    
    <!-- Manual Valve (Right) -->
    <path d="M700,230 L740,230 L730,250 L710,250 Z" fill="#9ca3af"/>
    <line x1="720" y1="230" x2="720" y2="210" stroke-width="3"/>
    <circle cx="720" cy="210" r="15" fill="none" stroke="#dc2626" stroke-width="3"/>

    <!-- Horizontal Run Right-to-Middle -->
    <path d="M720,280 L550,330" fill="url(#yellowPipe)" stroke-width="2"/> 
    
    <!-- ITEM 1: Reducing Valve (Middle) -->
    <g transform="translate(550, 310)">
        <!-- Valve Body -->
        <path d="M-10,10 L10,30 L10,10 L30,0 L10,-10 L10,-30 L-10,-10 L-30,0 Z" fill="#9ca3af"/>
        <!-- Top Pilot -->
        <rect x="-10" y="-50" width="20" height="40" fill="#fef9c3" stroke="#ca8a04"/>
        <text x="0" y="-70" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e3a8a">1</text>
        <circle cx="0" cy="-65" r="14" fill="none" stroke="#1e3a8a" stroke-width="2"/>
    </g>

    <!-- Horizontal Run Middle-to-Left -->
    <path d="M530,335 L400,370" fill="url(#yellowPipe)" stroke-width="2"/>

    <!-- ITEM 2: Control Valve (Left) -->
    <g transform="translate(400, 350)">
        <!-- Valve Body -->
        <path d="M-10,10 L10,30 L30,25 L-10,10 Z" fill="#9ca3af"/>
        <!-- Actuator -->
        <line x1="10" y1="20" x2="10" y2="-20" stroke-width="3"/>
        <path d="M-10,-20 A 20 20 0 0 1 30 -20 L 30 0 L -10 0 Z" fill="#fef08a" stroke="#ca8a04"/>
        <!-- Label 2 -->
        <line x1="10" y1="-20" x2="10" y2="-50" stroke="#1e3a8a"/>
        <circle cx="10" cy="-50" r="14" fill="#fff" stroke="#1e3a8a" stroke-width="2"/>
        <text x="10" y="-45" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e3a8a">2</text>
    </g>

    <!-- Connection to Heat Exchanger -->
    <path d="M380,375 L200,420" fill="url(#yellowPipe)" stroke-width="2"/> <!-- Pipe to HEX -->
    <path d="M200,420 L200,250" fill="url(#yellowPipe)" stroke-width="2"/> <!-- Vertical to HEX Input -->
    <path d="M200,250 L190,245" fill="url(#yellowPipe)"/> <!-- Connect -->
  </g>

  <!-- 4. CONDENSATE RETURN (Bottom) - ITEM 4 -->
  <g transform="translate(450, 480)">
    <!-- Trap Body -->
    <path d="M0,0 A20,20 0 0,0 40,0 A20,20 0 0,0 0,0 Z" fill="#9ca3af" stroke="#4b5563"/>
    <rect x="10" y="-10" width="20" height="20" fill="#9ca3af"/>
    <!-- Pipes -->
    <path d="M40,0 L150,-30" fill="none" stroke="#facc15" stroke-width="6"/> <!-- Out -->
    <path d="M0,0 L-100,30" fill="none" stroke="#facc15" stroke-width="6"/> <!-- In -->
    
    <!-- Label 4 -->
    <line x1="20" y1="10" x2="20" y2="40" stroke="#1e3a8a" stroke-width="2"/>
    <circle cx="20" cy="40" r="14" fill="#fff" stroke="#1e3a8a" stroke-width="2"/>
    <text x="20" y="45" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e3a8a">4</text>
  </g>

</svg>`;

// Raw SVG for Pipes
const RAW_SVG_TUBULACOES = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' style='background-color:#f8fafc;'><text x='400' y='30' text-anchor='middle' font-family='sans-serif' font-size='20' font-weight='bold' fill='#334155'>IDENTIFICAÇÃO DAS TUBULAÇÕES (Vista Lateral)</text><path d='M100,100 L700,50 L700,300 L100,350 Z' fill='none' stroke='#94a3b8' stroke-width='2' stroke-dasharray='5,5'/><path d='M120,320 L680,270' stroke='#3b82f6' stroke-width='10'/><text x='150' y='310' font-family='sans-serif' font-size='12' fill='#1d4ed8'>Água Fria</text><path d='M120,280 L680,230' stroke='#ef4444' stroke-width='8'/><text x='150' y='270' font-family='sans-serif' font-size='12' fill='#b91c1c'>Vapor</text><path d='M120,240 L680,190' stroke='#22c55e' stroke-width='8'/><text x='150' y='230' font-family='sans-serif' font-size='12' fill='#15803d'>Água Quente</text><line x1='650' y1='270' x2='750' y2='270' stroke='#64748b' stroke-width='1'/><text x='760' y='275' font-family='sans-serif' font-size='12'>Retorno Torre</text><line x1='200' y1='280' x2='100' y2='280' stroke='#64748b' stroke-width='1'/><text x='20' y='285' font-family='sans-serif' font-size='12'>Entrada Vapor</text></svg>`;

// Encode function to ensure UTF-8 compatibility with btoa
const toBase64 = (str: string) => {
    if (typeof window !== 'undefined') {
        return window.btoa(unescape(encodeURIComponent(str)));
    }
    
    // Safely access Buffer for node environments without requiring @types/node
    const buffer = (globalThis as any).Buffer;
    if (buffer) {
        return buffer.from(str).toString('base64');
    }
    
    return str;
};

const SVG_ESTACAO_VAPOR = `data:image/svg+xml;base64,${toBase64(RAW_SVG_ESTACAO_VAPOR)}`;
const SVG_TUBULACOES = `data:image/svg+xml;base64,${toBase64(RAW_SVG_TUBULACOES)}`;

// EXPORT MAP FOR CHAT INTERFACE
export const IMAGE_MAP: Record<string, string> = {
    "IMAGE_VAPOR": SVG_ESTACAO_VAPOR,
    "IMAGE_TUBULACOES": SVG_TUBULACOES
};

// ==============================================================================
// MACHINE 1: PASTEURIZADOR (LINHA 501)
// ==============================================================================
const PASTEURIZADOR_L501_CONTENT = `
IDENTIFICAÇÃO DO EQUIPAMENTO
Máquina: PASTEURIZADOR TPII 50/244 - 13
Ano: 2008 | Encomenda: 290102 | Cliente: AMBEV-MINAS

MÓDULO 1: INTRODUÇÃO
3.3 Identificação: TP (Túnel Pasteurizador), II (Dois andares), 50 (Largura 5,00m), 244 (Comprimento 24,4m), 13 (Zonas).
4. SEGURANÇA: 4.1 EPIs: Protetor de ouvidos, Óculos, Luvas, Macacão/Guarda-pó, Botas. 4.4 Manutenção: Desligar chave geral.
5. APRESENTAÇÃO: 5.4 Fluxos: Garrafas, Água (Regenerativo), Vapor (Redutora/Moduladora).
5.5 PROCESSO: A (Carregamento), B (Aquecimento), C (Pasteurização), D (Resfriamento), E (Descarga).
Cálculo UP Cerveja: 60°C = 1,00 UP/min.

MÓDULO 2: TRANSPORTE E INSTALAÇÃO
1. Pesos: Cabeceira Acionamento (5,5t), Retorno (5,1t), Tanque Processo (4,2t).
3.3 Utilidades: 
- Água: 4,0 bar.
- Vapor: 8,0 bar (2.300 kg/h médio).
- Energia: 440 kVA, 380V, 60Hz, 670A.
- Ar: 6,0 bar.

MÓDULO 3: OPERAÇÃO
2. Painel IHM: Senhas (Operação, Supervisão, Engenharia). Cores: Verde (Ligado), Cinza (Desligado), Vermelho (Alarme).
4. Parâmetros Iniciais: Monitorar BA1-BA3, BP1-BP6, BR1-BR3, MN1-MN4.
8. Encerramento: Verificar garrafas, Fechar vapor lento, Parada Total (bombas desligam sequencialmente), Lavagem.

MÓDULO 4: MANUTENÇÃO
1. Tabela Periódica: 
- 24h: Lubrificação, esguichos.
- 180h: Limpeza geral, filtros Y vapor.
- 360h: Trocador calor.
- 540h: Rolamentos redutores, células carga.
11. Peças de Reposição (Estoque Anual):
- 03214.14.001.1: MANÔMETRO CI 4.1/2" x 1/4" BSP 0-10 bar
- 899.05.00.300.14: ESGUICHO TIPO SF 102 FC 2" (145 qtd)
- 03063.03.085.0: VÁLVULA COM ATUADOR 1/2" 24Vcc
- 899.05.00.681.53: SELO MECÂNICO KSB NAVVI 34,9
- 899.05.00.681.54: SELO MECÂNICO KSB NAVVI 1.3/4

CATÁLOGO DE PEÇAS (Resumo):
- 899.05.00.520.89: MOTOREDUTOR KA57 R37 DZ71K4 0,15kW
- 03104.34.116.0: MANCAL SFT 40
- 899.05.00.521.03: REDUTOR PLANETÁRIO 0,55kW
- 699.10.50.006.05: ESTAÇÃO DE VAPOR
- 899.05.00.504.30: BBA. X-KSB MEGABLOC 125-200F+20CV
- 899.05.00.401.19: MEDIDOR DE VAZÃO ELETROMAGNÉTICO
- 999 / 899.05.00.260.91: TRANSMISSOR DE NIVEL LIQUICAP M FMI51
`;

// ==============================================================================
// MACHINE 2: LAVADORA DE GARRAFAS (LINHA 503) - CONTEÚDO COMPLETO
// ==============================================================================
const LAVADORA_L503_CONTENT = `
# MANUAL DE OPERAÇÃO - LAVADORA DE GARRAFAS 62/95 ZL 52/470 5ET
SÉRIE: 211183 | LINHA 503 | EDIÇÃO: Junho/2012

## MÓDULO 1: INTRODUÇÃO
### 3.3 Identificação do Modelo
- **Modelo**: 62/95 ZL 52/470 5ET
- **62**: Número de garrafas por pente
- **95**: Distância entre células (mm)
- **52**: O 1º número (5) identifica a quantidade de banhos. O 2º (2) indica que possui uma bateria de esguichos.
- **470**: Altura da carcaça (cm)
- **5ET**: Número de extratores de rótulos (um simples e dois duplos).

### 6.3 Descrição da Máquina e Fluxos
- **6.3.1 Fluxo de Garrafas**: Garrafas são introduzidas nas células plásticas pelo sistema de carga. As células formam fileiras transversais (pentes).
- **6.3.2 Fluxo de Água**: A água cumpre funções de limpeza na sequência inversa: Tanque água quente -> Esguicho quente I -> Esguicho quente II -> Enxágue final água fria.
- **6.3.3 Fluxo de Solução Cáustica**: Banhos de imersão e esguichamento de soda. Nível controlado por visores. A concentração de soda deve ficar entre 1 e 3%.
- **6.3.5 Fluxo de Vapor**: O aquecimento é feito por serpentinas. Pressão entrada 6-10 bar.
- **6.3.6 Fluxo de Ar Comprimido**: Atuação de válvulas de controle de fluxos de água e vapor. Pressão 4 a 6 bar.

### 6.4 Descrição do Processo (Ciclo de Lavagem)
1. **Acumulação e carregamento**: Mesa de carga atua como pulmão.
2. **Pré-imersão (Opcional)**: Remove cacos, areia e resíduos sólidos.
3. **Pré-esguichamento**: Elimina resíduos, limpeza preliminar e pré-aquecimento.
4. **Banhos de imersão**: Abrandamento definitivo e dissolução da sujeira. Soda cáustica.
5. **Esguichamento de soda**: 4 carreiras de esguichos fixos. Ação mecânica.
6. **Extração de rótulos**: Bombas axiais de alta vazão e baixa pressão, esteiras rotativas.
7. **Esguichamento pré-remolho**: Remove rótulos residuais.
8. **Enxágues em água quente**: Retira solução cáustica e calor.
9. **Enxágue final (água fria)**: Esguichos rotativos acompanham o bocal da garrafa.
10. **Descarga**: Defletor, sacadores, bandeirola, cames e guias.

## MÓDULO 2: TRANSPORTE E INSTALAÇÃO
### 1. Dimensões e Pesos
- Comprimento total: 20.230 mm (ZL 62)
- Largura da máquina: 6.240 mm (A)
- Altura com pés: 4.700 mm
- Peso em funcionamento: 375 toneladas.
- Peso vazia: 171 toneladas.
- Peso do maior bloco para transporte: 32.000 kg.

### 3. Utilidades e Consumo
- **Água Fresca**: 25,9 m³/h. Pressão entrada: 1,5 a 2,5 bar.
- **Vapor**: 1.730 kg/h. Pressão entrada: 8 bar ± 1. Pressão saída máx: 1,0 bar. Título: 0,95.
- **Ar Comprimido**: Pressão entrada 6 bar.
- **Energia Elétrica**: 320 kVA, 380V, 60Hz.

### Tabela de Temperaturas e Concentração de Soda (Módulo 2, Item 3.3)
| Tanque | Temperatura | Temp. Máx | Concentração Soda |
|--------|-------------|-----------|-------------------|
| 1      | 65°C        | 70°C      | 2% ± 0,2          |
| 2      | 75°C        | 85°C      | 1,8% ± 0,2        |
| 3      | 75°C        | 85°C      | 1,6% ± 0,2        |
| 4      | 65°C        | 70°C      | 1% mínimo         |
*Obs: Possibilidade de choque térmico pela diferença da temperatura ambiente.*

## MÓDULO 3: OPERAÇÃO (IHM)
O controle é feito via IHM. Senhas: SEM USUÁRIO, OPERAÇÃO, SUPERVISÃO, MANUTENÇÃO, ENGENHARIA.

### 9. DIAGNÓSTICO DE ANORMALIDADES NA OPERAÇÃO (TABELA)
| Sintoma | Causas Prováveis | Ação |
|---------|------------------|------|
| **1. Resquícios de soda nas garrafas** (Teste fenolftaleina positivo) | 1a. Velocidade alta do processo | Ajustar velocidade do correntão |
| | 1b. Esguichos não alinhados/obstruídos | Alinhar e/ou desobstruir esguichos |
| | 1c. Água insuficiente no enxaguamento | Verificar filtros e peneiras |
| | 1d. Incrustações em pentes/células | Limpeza geral de pentes e células |
| | 1e. Peneiras e filtros obstruídos | Limpar peneiras e filtros |
| **2. Resquícios de impureza** (Teste azul de metileno positivo) | 2a. Enxágue insatisfatório | Centralizar e limpar esguichos |
| | 2b. Concentração cáustica baixa | Verificar sistema de dosagem de soda, válvulas |
| | 2c. Temperatura baixa | Verificar sistema de controle temperatura, vapor |
| **3. Garrafas manchadas** | 3a. Elevada dureza da água | Utilizar água adequada |
| | 3b. Prolongadas paradas na produção | Evitar paradas na linha |
| | 3c. Temperatura excessiva | Verificar sistema controle temperatura |
| | 3d. Excessiva concentração de soda | Verificar dosagem soda |
| **4. Ocorrência excessiva de espuma** | 4a. Pressão demasiada bombas | Verificar pressões e vedações |
| | 4b. Solução soda com excesso resíduos | Fazer decantação dos tanques |
| | 4c. Aditivos mal dosados | Consultar laboratório |
| **5. Problemas biológicos** | 5a. Temperatura/concentração inadequadas | Verificar sistemas de controle |
| | 5b. Contaminação biológica | Executar desinfecção tanques |
| **6. Tombamento garrafas mesa carga** | 6a. Garrafa sem fundo | Retirar garrafas |
| | 6b. Falta lubrificação (sabão) | Verificar eficiência lubrificação |
| | 6d. Pressão excessiva | Verificar velocidade esteira |
| **9. Quebra de garrafas no interior** | 9a. Folga no correntão | Ajustar folga |
| | 9b. Choque térmico | Verificar temperatura |
| **11. Entupimento de bombas/esguichos** | 11b. Alta concentração soda | Verificar temperatura/concentração |
| | 11c. Níveis incorretos | Verificar níveis |
| | 11d. Rótulos baixa qualidade | Verificar qualidade rótulos |
| **13. Baixa pressão esguichos** | 13a. Filtro e peneiras obstruídas | Limpar filtros e peneiras |

### 2.3.2 Lista de Alarmes (Exemplos Principais)
- 0001: K00-EMERGÊNCIA CARGA/DESCARGA. Liberar botão e resetar.
- 0002: K03-FALTA DE FASE. Realimentar tensão 380VCA.
- 0013: NÍVEL TQ's DE SOLUÇÃO ABAIXO DO MÍNIMO. Ajustar setpoint ou nivelar manual.
- 0020: VELOCIDADE ACIONAMENTO PRINCIPAL REDUZIDA (Falta garrafas entrada).
- 0068: FALTA DE GARRAFAS NA ENTRADA. Aguardar normalização.
- 0146: M004-DISJUNTOR MOTOR BBA ÁGUA QUENTE 1. Verificar curto ou regulagem.
- 0221: ZS015-CABO DE SEGURANÇA ACIONADO MESA DE CARGA. Liberar cabo, resetar.
- 2625: M036-FALHA DE SINCRONISMO. Sincronizar eixo.
- 2659: M038-TRAVAMENTO EIXO. Colisão de garrafas/cames. Verificar e corrigir.

### 6.1 Partida
- **Modo Stand-by**: Passo 1 a 3 (Enchimento tanques, ligando motores).
- **Modo Produção**: Passo 4 a 11 (Reposicionar eixos, sincronizar carga/descarga, aquecimento inicial, partida descarga/carga).

## MÓDULO 4: MANUTENÇÃO E CONSERVAÇÃO
### 1. Tabela de Manutenção Periódica
- **A cada 24h**: Inspecionar lubrificação centralizada, sensores de segurança, tubos de esguicho, limpar peneiras/filtros, esvaziar/limpar tanque pré-esguicho.
- **A cada 180h**: Limpeza geral da máquina (interna/externa), engraxar engrenagens/correntes, limpar filtros e purgadores de vapor, verificar óleo redutores.
- **A cada 360h**: Desmontar 4 pentes para inspeção interna dos banhos e retirada de detritos.
- **A cada 540h**: Verificar folga do correntão (15-20mm), limpar esguichos retorno, verificar desgaste guias, calibração células de carga.

### 2. Lubrificantes Recomendados
- **Graxa**: LGWA 2 AL/18 (SKF) ou equivalente (Mineral, -30 a 140°C).
- **Óleo Redutores Planetários (Brevini)**: ISO VG 150-220.
- **Óleo Motoredutores (SEW)**: ISO VG 220 (Mobil) ou ISO VG 680 (Mineral).
- **Óleo Correntão**: Óleo sintético com aditivos EP.

### 9.2 Pontos de Lubrificação a Graxa
- A1: Eixos do correntão (superiores).
- A2: Eixos das mesas de carga e descarga.
- A3: Mancais dos extratores de rótulos.
- **Lubrificação Centralizada**: Pressão máx 1500 psi. Verificar nível reservatório diariamente.

### 11.1 Limpeza de Filtros "Y" (Vapor)
- Na estação redutora de pressão. Remover tampa, retirar filtro, trocar vedações, limpar e reinstalar. A cada 30 dias.

## CATÁLOGO DE PEÇAS COMPLETO (TODAS AS TABELAS)

### 01 - INSTALAÇÃO DAS PORTAS DE INSPEÇÃO E TERMÔMETROS (Pág. 9)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 03216.18.257.0 | 08 | Termômetro |
| 2 | 194.01.05.127.1 | 13 | Porta de Inspeção Média - Aço Carbono |
| 3 | 194.01.05.127.2 | 05 | Porta de Inspeção Média - Aço Inox |
| 4 | 199.01.50.066.10 | 08 | Janela do Esguichamento |
| 5 | 194.01.05.138.1 | 05 | Porta de Inspeção Pequena - Aço Carbono |
| 6 | 194.01.05.138.2 | 03 | Porta de Inspeção Pequena - Aço Inox |
| 28 | 194.01.50.066.11 | 02 | Janela do Esguichamento Água Fresca |
| 36 | 194.01.50.066.09 | 02 | Janela do Esguichamento Adicional |

### 02 - PORTA DE INSPEÇÃO MÉDIA - AÇO CARBONO (Pág. 11)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 2 | 194.01.05.124.1 | 01 | Porta Média |
| 3 | 194.01.05.273.2 | 01 | Vedação da Porta (Média) |
| 4 | 03023.17.001.0 | 04 | Manípulo M12 |
| 5 | 194.01.05.867.1 | 04 | Arruela |

### 03 - PORTA DE INSPEÇÃO MÉDIA - AÇO INOX (Pág. 13)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 2 | 194.01.05.124.2 | 01 | Porta Média |
| 3 | 194.01.05.273.2 | 01 | Vedação da Porta (Média) |
| 4 | 03023.17.001.0 | 04 | Manípulo M12 |
| 5 | 194.01.05.867.2 | 04 | Arruela |

### 04 - PORTA DE INSPEÇÃO PEQUENA - AÇO INOX (Pág. 15)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 2 | 194.01.05.140.2 | 01 | Porta Pequena |
| 3 | 194.01.05.273.1 | 01 | Vedação da Porta (Pequena) |
| 4 | 03023.17.001.0 | 02 | Manípulo M12 |
| 5 | 194.01.05.867.2 | 02 | Arruela |

### 05 - PORTA DE INSPEÇÃO PEQUENA - AÇO CARBONO (Pág. 17)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 2 | 194.01.05.140.1 | 01 | Porta Média |
| 3 | 194.01.05.273.1 | 01 | Vedação da Porta (Média) |
| 4 | 03023.17.001.0 | 02 | Manípulo M12 |
| 5 | 194.01.05.867.1 | 02 | Arruela |

### 06 - JANELA DO ESGUICHAMENTO (Pág. 19)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 199.01.50.114.06 | 01 | Vidro 3/16" x 547 x 539 |
| 2 | 199.01.50.067.13 | 01 | Moldura Janela |
| 3 | 03204.02.079.0 | 2,4m | Perfil 19 x 24 NBR 60 PT |

### 07 - JANELA DO ESGUICHAMENTO ÁGUA FRESCA (Pág. 21)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 03990.10.132.0 | 01 | Vidro 3/16x750x538 |
| 2 | 199.01.50.067.14 | 01 | Moldura Janela |
| 3 | 03204.02.079.0 | 2,8m | Perfil 19 x 24 NBR 60 PT |

### 08 - JANELA DO ESGUICHAMENTO REMOLHO (Pág. 23)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 199.01.50.114.05 | 01 | Vidro 3/16" x 401 x 386 |
| 2 | 199.01.50.067.12 | 01 | Moldura Janela |
| 3 | 03204.02.079.0 | 1,8m | Perfil 19 x 24 NBR 60 PT |

### 09 - PENTE (Pág. 25)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.03.50.003.5 | 01 | Perfil Pente P.95 |
| 4 | 194.03.50.028.01 | 62 | Célula DL P.95 Aberta |

### 10 - GUIAS DE DESGASTE (Pág. 27)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.01.50.301.01 | 01 | CINTA FIX. MESA CARGA ORBITAL |
| 2 | 194.01.50.432.14 | 01 | GUIA CORR. TQ.CARGA COM TRILHO (lado das bombas) |
| 3 | 194.01.50.432.13 | 01 | GUIA CORR. TQ.CARGA COM TRILHO (lado do acionamento) |
| 4 | 194.01.20.054.1 | 09 | CINTA GUIA |
| 5 | 194.01.20.043.1 | 07 | CINTA GUIA |
| 6 | 194.01.20.070.1 | 04 | GUIA CORRENTÃO |
| 7 | 194.01.20.040.1 | 07 | CINTA GUIA |
| 8 | 194.01.20.070.2 | 04 | GUIA CORRENTÃO |
| 9 | 194.01.20.043.10 | 01 | CINTA GUIA |
| 10 | 194.01.50.258.01 | 01 | CINTA GUIA P/470 |
| 11 | 194.01.50.280.02 | 01 | GUIA CORRENTÃO ESG.SODA ZL |
| 12 | 194.01.50.432.04 | 01 | GUIA CORRENTÃO SUPERIOR TQ. ÀGUA QUENTE |
| 13 | 194.01.50.432.05 | 01 | GUIA CORRENTÃO CENTRAL TQ. ÀGUA QUENTE |
| 14 | 194.01.50.432.07 | 01 | GUIA CORRENTÃO TQ ÀGUA QUENTE |
| 15 | 194.01.50.432.02 | 01 | GUIA CORRENTÃO SUPERIOR TQ. ÀGUA QUENTE |
| 16 | 194.01.50.432.03 | 01 | GUIA CORRENTÃO INFERIOR TQ. ÀGUA QUENTE |
| 17 | 194.01.50.432.06 | 01 | GUIA CORRENTÃO ENTRADA TQ. ÀGUA QUENTE |
| 18 | 194.01.50.432.08 | 01 | GUIA CORRENTÃO TQ. DESCARGA DIREITA (lado das bombas) |
| 19 | 194.01.50.432.12 | 01 | GUIA CORRENTÃO TQ. DESCARGA ESQUERDA (lado do acionamento) |
| 20 | 194.01.50.432.09 | 01 | GUIA CORRENTÃO TQ. DESCARGA SUPERIOR |
| 21 | 194.01.50.432.10 | 01 | GUIA CORRENTÃO TQ. DESCARGA INFERIOR DIREITA (lado das bombas) |
| 22 | 194.01.50.432.11 | 01 | GUIA CORRENTÃO TQ. DESCARGA INFERIOR ESQUERDA (lado do acionamento) |
| 23 | 194.01.50.040.02 | 01 | GUIA SUPERIOR DO ROLETE |

### 11 - CONJ. GUIAS RETORNO DO CORRENTÃO (Pág. 29)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.01.50.435.01 | 01 | Guia Removível Retorno do Correntão |
| 2 | 194.01.50.435.09 | 01 | Guia Removível Retorno do Correntão |
| 3 | 194.01.50.435.03 | 02 | Guia Removível Retorno do Correntão |
| 4 | 194.01.50.435.04 | 01 | Guia Removível Retorno do Correntão |
| 5 | 194.01.50.435.05 | 01 | Guia Removível Retorno do Correntão |
| 6 | 03021.26.243.0 | 120 | Arruela Lisa 17x30x3 |
| 7 | 03134.35.243.0 | 120 | Arruela de Pressão B16 DIN127 |
| 8 | 03133.11.049.0 | 120 | Porca Sextavada M16 DIN934 |
| 11 | 194.01.50.435.11 | 01 | Guia Removível Retorno do Correntão |
| 12 | 194.01.50.435.19 | 01 | Guia Removível Retorno do Correntão |
| 13 | 194.01.50.435.13 | 02 | Guia Removível Retorno do Correntão |
| 14 | 194.01.50.435.14 | 01 | Guia Removível Retorno do Correntão |
| 15 | 194.01.50.435.15 | 01 | Guia Removível Retorno do Correntão |

### 12 - CONJ. EIXOS COMPLETOS (Pág. 31)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 199.02.50.027.21 | 01 | Eixo Tanque Carga Retorno |
| 3 | 199.02.50.027.22 | 01 | Eixo Tanque Carga 2 |
| 5 | 199.02.50.027.23 | 01 | Eixo Tanque com Esguichamento |
| 8 | 199.02.50.027.24 | 05 | Eixo Tanque Duplo |
| 10 | 199.02.50.027.25 | 01 | Eixo Tanque Água Quente |
| 12 | 199.02.50.027.26 | 01 | Eixo Tanque Descarga |

### 13 - CONJ. CORRENTÃO E ACESSÓRIOS (Pág. 33)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.02.20.025.2 | 691 | Correntão 135-2500 (186,57 metros) |
| 2 | 194.02.50.016.01 | 02 | Meio Elo Correntão Passo Curto Direito |
| 3 | 194.02.50.016.02 | 02 | Meio Elo Correntão Passo Curto Esquerdo |
| 13 | 03133.08.009.0 | - | Porca Sextavada Trava Nylon M16 DIN982 |

### 14 - EIXO TANQUE CARGA RETORNO (Pág. 35)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.02.50.004.0 | 01 | Eixo Flangeado |
| 2 | 194.02.20.068.3 | 02 | Engrenagem Cadeia DL 95 Z20 P=135 |
| 3 | 199.02.50.026.02 | 01 | Ponteira Eixo RD. 100 |
| 4 | 194.02.50.006.01 | 01 | Ponteira Eixo Mancal |
| 5 | 01132.16.636.0 | 16 | Parafuso Sext. M24 x 070 DIN931CL 5.8 |
| 6 | 194.02.20.021.1 | 02 | Junta Quadrada |
| 7 | 194.02.20.010.4 | 01 | Placa de Reforço |
| 8 | 03024.26.897.0 | 02 | Retentor Duplo 100 x 130 x 13 |
| 9 | 194.02.50.022.02 | 01 | Mancal MSF 100 |
| 10 | 03024.26.841.0 | 01 | Retentor Duplo 80 x 100 x 13 |
| 11 | 194.02.50.022.01 | 01 | Mancal MSF 80 |
| 12 | 03137.10.649.0 | 02 | Chaveta A 28 x 16 x 140 DIN6885 |
| 15 | 03133.11.056.0 | 28 | Porca Sext. M20 DIN934 CL.5 |
| 16 | 03134.35.051.1 | 28 | Arruela Pressão B20 DIN127 |
| 17 | 194.02.20.010.3 | 01 | Placa de Reforço |
| 18 | 03133.11.066.0 | 04 | Porca Sext. M24 DIN934 CL.5 |
| 19 | 03134.35.059.1 | 04 | Arruela Pressão B24 DIN127 |
| 20 | 03137.28.025.0 | 04 | Pino Cônico 12 x 85 Din7977 |
| 21 | 03134.28.034.1 | 24 | Anel Prato M20 |
| 22 | 01134.28.034.0 | 24 | Arruela Dubo M20 Nylon |
| 23 | 01132.16.536.9 | 24 | Parafuso Sext. M20 x 065 DIN931CL 5.8 |
| 25 | 03134.35.059.1 | 16 | Arruela Pressão B24 DIN127 |

### 15 - EIXO TANQUE CARGA 2 (Pág. 37)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.02.50.004.01 | 01 | Eixo Flangeado |
| 2 | 194.02.20.068.3 | 02 | Engrenagem Cadeia DL 95 Z20 P135 |
| 3 | 199.02.50.026.02 | 01 | Ponteira Eixo RD 100 |
| 4 | 194.02.50.006.01 | 01 | Ponteira Eixo Mancal |
| 5 | 01132.16.636.0 | 16 | Parafuso Sext. M24 x 070 DIN931CL 5.8 |
| 6 | 194.02.20.093.1 | 01 | Junta Retangular 898x498x3 |
| 7 | 194.02.20.099.5 | 01 | Placa Reforço 900x500x15 |
| 8 | 03024.26.897.0 | 01 | Retentor Duplo 100 x 130 x 13 |
| 9 | 194.02.50.022.02 | 01 | Mancal MSF 100 |
| 10 | 03024.26.841.0 | 01 | Retentor Duplo 80 x 100 x 13 |
| 11 | 194.02.50.022.01 | 01 | Mancal MSF 80 |
| 12 | 03137.10.649.0 | 02 | Chaveta A 28 x 16 x 140 DIN6885 |
| 13 | 03134.35.043.1 | 32 | Arruela Pressão B16 DIN127 |
| 14 | 03133.11.046.0 | 32 | Porca Sext. M16 DIN934 CL.5 |
| 15 | 03133.11.056.0 | 04 | Porca Sext. M20 DIN934 CL.5 |
| 16 | 03134.35.051.1 | 04 | Arruela Pressão B20 DIN127 |
| 17 | 194.02.20.099.6 | 01 | Placa Reforço 900 x 500 x 15 |
| 18 | 03133.11.066.0 | 04 | Porca Sext. M24 DIN934 CL.5 |
| 19 | 03134.35.059.1 | 04 | Arruela Pressão B24 DIN127 |
| 20 | 03137.28.025.0 | 04 | Pino Cônico 12 x 85 DIN7977 |
| 21 | 03134.28.028.1 | 32 | Anel Prato M16 |
| 22 | 01134.28.028.0 | 32 | Arruela Dubo M16 Nylon |
| 23 | 01132.17.416.0 | 32 | Parafuso Sext. M16 x 060 DIN933 CL 5.8 |
| 24 | 194.02.20.093.1 | 01 | Junta Retangular 898x498x3 |
| 25 | 03134.35.059.1 | 16 | Arruela Pressão B24 DIN127 |

### 16 - EIXO DO TANQUE COM ESGUICHAMENTO (Pág. 39)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.02.50.004.02 | 01 | Eixo Flangeado |
| 2 | 194.02.20.068.3 | 02 | Engrenagem Cadeia DL95 Z20 P=135 |
| 3 | 199.02.50.026.02 | 01 | Ponteira Eixo RD 100 |
| 4 | 194.02.50.006.01 | 01 | Ponteira Eixo Mancal |
| 5 | 01132.16.636.0 | 16 | Parafuso Sext. M24 x 70 DIN931 CL 5.8 |
| 6 | 194.02.20.093.1 | 01 | Junta Retangular Esp. 898 x 498 x 3 C/ 16 Furos |
| 7 | 194.02.20.099.5 | 01 | Placa Reforço 900 x 500 x 15,8 |
| 8 | 03024.26.897.0 | 02 | Retentor Duplo 100 x 130 x 13 |
| 9 | 194.02.50.022.02 | 01 | Mancal MSF 100 |
| 10 | 03024.26.841.0 | 02 | Retentor Duplo 80 x 100 x 13 |
| 11 | 194.02.50.022.01 | 01 | Mancal MSF 80 |
| 12 | 03137.10.649.0 | 02 | Chaveta A 28x16x140 DIN6885 |
| 13 | 03134.35.043.1 | 32 | Arruela Pressão B16 DIN127 |
| 14 | 03133.11.046.0 | 32 | Porca Sext. M16 DIN934 CL.5 |
| 15 | 03133.11.056.0 | 04 | Porca Sext. M20 DIN934 CL.5 |
| 16 | 03134.35.051.1 | 04 | Arruela Pressão B20 DIN127 |
| 17 | 194.02.20.099.6 | 01 | Placa Reforço 900 x 500 x 15 |
| 18 | 03133.11.066.0 | 04 | Porca Sext. M24 DIN934 CL.5 |
| 19 | 03134.35.059.1 | 04 | Arruela Pressão B24 DIN127 |
| 20 | 03137.28.025.0 | 04 | Pino Cônico 12 x 85 DIN 7977 |
| 21 | 03134.28.028.1 | 32 | Anel Prato M16 |
| 22 | 01134.28.028.0 | 32 | Arruela Dubo M16 Nylon |
| 23 | 01132.17.416.0 | 32 | Parafuso Sext. M16 x 060 DIN933 CL 5.8 |
| 24 | 194.02.20.093.1 | 01 | Junta Retangular Esp. 898x368x3 C/16 Furos |
| 25 | 03134.35.059.1 | 16 | Arruela Pressão B24 DIN127 |

### 17 - EIXO TANQUE DUPLO (Pág. 41)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.02.50.004.04 | 01 | Eixo Flangeado |
| 2 | 194.02.20.068.3 | 02 | Engrenagem Cadeia DL 95 Z20 P=135 |
| 3 | 199.02.50.026.02 | 01 | Ponteira Eixo RD 100 |
| 4 | 194.02.50.006.01 | 01 | Ponteira Eixo Mancal |
| 5 | 01132.16.636.0 | 16 | Parafuso Sext. M24 x 070 DIN933 CL 5.8 |
| 6 | 194.02.20.093.1 | 02 | Junta Retangular 898 x 498 x 3 c/ 16 furos |
| 7 | 194.02.20.099.5 | 01 | Placa Reforço 900 x 500 x 15,8 |
| 8 | 03024.26.897.0 | 01 | Retentor Duplo 100 x 130 x 13 |
| 9 | 194.02.50.022.02 | 01 | Mancal MSF 100 |
| 10 | 03024.26.841.0 | 01 | Retentor Duplo 80 x 100 x 13 |
| 11 | 194.02.50.022.01 | 01 | Mancal MSF 80 |
| 12 | 03137.10.649.0 | 02 | Chaveta A 28 x 16 x 140 DIN6885 |
| 13 | 03134.35.043.1 | 32 | Arruela Pressão B16 DIN 127 |
| 14 | 03133.11.046.0 | 32 | Porca Sext. M16 DIN934 CL.5 |
| 15 | 03133.11.056.0 | 04 | Porca Sext. M20 DIN934 CL.5 |
| 16 | 03134.35.051.1 | 04 | Arruela Pressão B20 DIN127 |
| 17 | 194.02.20.099.6 | 01 | Placa Reforço 900 x 500 x 15,8 |
| 18 | 03133.11.066.0 | 04 | Porca Sext. M24 DIN934 CL.5 |
| 19 | 03134.35.059.1 | 04 | Arruela Pressão B24 DIN127 |
| 20 | 03137.28.025.0 | 04 | Pino Cônico 12 x 85 DIN797 |
| 21 | 03134.28.028.1 | 32 | Anel Prato M16 |
| 22 | 01134.28.028.0 | 32 | Arruela Dubo M16 Nylon |
| 23 | 01132.17.416.0 | 32 | Parafuso Sext. M16 x 060 DIN933 CL 5.8 |
| 24 | 194.02.20.093.1 | 01 | Junta Retangular 898x498x3 c/ 16 Furos |
| 25 | 03134.35.059.1 | 16 | Arruela Pressão B24 DIN127 |

### 18 - EIXO TANQUE ÁGUA QUENTE (Pág. 43)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.02.50.004.05 | 01 | Eixo Flangeado |
| 2 | 194.02.20.068.3 | 02 | Engrenagem Cadeia DL 95 Z20 P=135 |
| 3 | 199.02.50.026.02 | 01 | Ponteira Eixo RD 100 |
| 4 | 194.02.50.006.01 | 01 | Ponteira Eixo Mancal |
| 5 | 01132.16.636.0 | 16 | Parafuso Sext. M24 x 070 DIN931 CL 5.8 |
| 6 | 194.02.20.093.1 | 01 | Junta Retangular 898x498x3 |
| 7 | 194.02.20.099.5 | 01 | Placa Reforço 900x500x15 |
| 8 | 03024.26.897.0 | 01 | Retentor Duplo 100 x 130 x 13 |
| 9 | 194.02.50.022.02 | 01 | Mancal MSF 100 |
| 10 | 03024.26.841.0 | 01 | Retentor Duplo 80 x 100 x 13 |
| 11 | 194.02.50.022.01 | 01 | Mancal MSF 80 |
| 12 | 03137.10.649.0 | 02 | Chaveta A 28 x 16 x 140 DIN6885 |
| 13 | 03134.35.043.1 | 32 | Arruela Pressão B16 DIN127 |
| 14 | 03133.11.046.0 | 32 | Porca Sext. M16 DIN934 CL.5 |
| 15 | 03133.11.056.0 | 04 | Porca Sext. M20 DIN934 CL.5 |
| 16 | 03134.35.051.1 | 04 | Arruela Pressão B20 DIN127 |
| 17 | 194.02.20.099.6 | 01 | Placa Reforço 900 x 500 x 15 |
| 18 | 03133.11.066.0 | 04 | Porca Sext. M24 DIN934 CL.5 |
| 19 | 03134.35.059.1 | 04 | Arruela Pressão B24 DIN127 |
| 20 | 03137.28.025.0 | 04 | Pino Cônico 12 x 85 DIN7977 |
| 21 | 03134.28.028.1 | 32 | Anel Prato M16 |
| 22 | 01134.28.028.0 | 32 | Arruela Dubo M16 Nylon |
| 23 | 01132.17.416.0 | 32 | Parafuso Sext. M16 x 060 DIN933 CL 5.8 |
| 24 | 194.02.20.093.1 | 01 | Junta Borracha 898x498x3 |
| 25 | 03134.35.059.1 | 16 | Arruela Pressão B24 DIN127 |

### 19 - EIXO TANQUE DESCARGA (Pág. 45)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.02.50.004.06 | 01 | Eixo Flangeado |
| 2 | 194.02.20.068.3 | 02 | Engrenagem Cadeia DL 95 Z20 P=135 |
| 3 | 199.02.50.026.02 | 01 | Ponteira Eixo RD 100 |
| 4 | 194.02.50.006.01 | 01 | Ponteira Eixo Mancal |
| 5 | 01132.16.636.0 | 16 | Parafuso Sext. M24 x 070 DIN931 CL 5.8 |
| 6 | 194.02.20.093.1 | 01 | Junta Retangular 898 x 498 x 3 c/ 16 furos |
| 7 | 199.02.50.028.01 | 01 | Placa Reforço 900 x 500 x 15,8 |
| 8 | 03024.26.897.0 | 01 | Retentor Duplo 100 x 130 x 13 |
| 9 | 194.02.50.022.02 | 01 | Mancal MSF 100 |
| 10 | 03024.26.841.0 | 01 | Retentor Duplo 80 x 100 x 13 |
| 11 | 194.02.50.022.01 | 01 | Mancal MSF 80 |
| 12 | 03137.10.649.0 | 02 | Chaveta A 28 x 16 x 140 DIN6885 |
| 13 | 03134.35.043.1 | 32 | Arruela Pressão B16 DIN127 |
| 14 | 03133.11.046.0 | 32 | Porca Sext. M16 DIN934 CL.5 |
| 15 | 03133.11.056.0 | 04 | Porca Sext. M20 DIN934 CL.5 |
| 16 | 03134.35.051.1 | 04 | Arruela Pressão B20 DIN127 |
| 17 | 194.02.20.099.6 | 01 | Placa Reforço 900 x 500 x 15,8 |
| 18 | 03133.11.066.0 | 04 | Porca Sext. M24 DIN934 CL.5 |
| 19 | 03134.35.059.1 | 04 | Arruela Pressão B24 DIN127 |
| 20 | 03137.28.025.0 | 04 | Pino Cônico 12 x 85 DIN7977 |
| 21 | 03134.28.028.1 | 32 | Anel Prato M16 |
| 22 | 01134.28.028.0 | 32 | Arruela Dubo M16 Nylon |
| 23 | 01132.17.416.0 | 32 | Parafuso Sext. M16 x 060 DIN933 CL 5.8 |
| 24 | 194.02.20.093.1 | 01 | Junta Retangular 898 x 498 x 3 c/ 16 furos |
| 25 | 03134.35.059.1 | 16 | Arruela Pressão B24 DIN127 |

### 20 - ACIONAMENTO COMPLETO (Pág. 47)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 199.02.50.033.03 | 10 | Conjunto Pino de Ancoragem |
| 2 | 899.05.00.521.50 | 10 | Redutor Ortogonal Brevini 1300 |
| 3 | 899.05.00.510.29 | 10 | Motor 3kW Acionamento de Eixos |

### 21 - DETALHE DO ACIONAMENTO COMPLETO (Pág. 49)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 2 | 899.05.00.521.50 | 10 | Redutor Ortogonal Brevini 1300 |
| 3 | 899.05.00.510.29 | 10 | Motor 3kW Acionamento dos Eixos |
| - | 03112.23.900.32 | 01 | Flange Intermediária |

### 22 - REDUTOR BREVINI - PEÇAS DO SUPORTE 00-0169 (Pág. 51)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 2 | 03112.23.900.11 | 01 | **Anel Seeger |
| 3 | 01104.20.634.0 | 02 | **Rolamento 6030 DIN625 |
| 4 | 03112.23.900.12 | 01 | **Anel O’ring 221,84x3,53 |
| 8 | 03112.23.900.13 | 01 | **Retentor BA165x190x13 |
| 9 | 03112.23.900.14 | 01 | **Anel O’ring 164,47x5,33 |
| 10 | 03112.23.900.15 | 01 | Eixo |
| 14 | 03112.23.900.16 | 01 | **Anel O’ring 101,19x3,53 |
| 16 | 03112.23.900.17 | 02 | **Anel de Retenção |

### 23 - REDUTOR BREVINI - PEÇAS DA REDUÇÃO 00-4176 (Pág. 53)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 03112.23.900.18 | 01 | **Coroa |
| 5 | 03112.23.900.19 | 01 | Pinhão |
| 29 | 03104.20.347.0 | 01 | Rolamento 16004 DIN625 |
| 33 | 03112.23.900.20 | 01 | Anel Seeger |
| 34 | 03112.23.900.21 | 01 | Anel Seeger |
| 36 | 03112.23.900.22 | 02 | **Anel O’ring 278,77x5,33 |
| P02 | 03112.23.900.23 | 01 | Kit Redução |

### 24 - REDUTOR BREVINI - PEÇAS DA FLANGE INTERMEDIARIA 003020 (Pág. 55)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 03112.23.900.24 | 01 | Flange Intermediária |
| 11 | 03112.23.900.25 | 01 | Tampo Respiradouro 3/8” |
| 12 | 03112.23.900.26 | 01 | Tampo Nivel de Óleo 3/8” |
| 13 | 03112.23.900.27 | 01 | Tampo Magnético 3/8” |

### 25 - REDUTOR BREVINI - PEÇAS DA REDUÇÃO 00-4070 (Pág. 57)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 03112.23.900.28 | 01 | **Coroa |
| 6 | 03112.23.900.29 | 01 | Pinhão |
| 35 | 03112.23.900.30 | 02 | **Anel O’ring 196,52x2,62 |
| P04 | 03112.23.900.31 | 01 | Redução |

### 26 - REDUTOR BREVINI - PEÇAS DA REDUÇÃO 00-4045 (Pág. 59)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 03112.23.900.33 | 01 | **Coroa |
| 8 | 03112.23.900.34 | 01 | Pinhão |
| 37 | 03112.23.900.35 | 02 | **Anel O’ring 196,52x2,62 |
| 47 | 03112.23.900.36 | 01 | Anel Seeger |
| P06 | 03112.23.900.37 | 01 | Redução |

### 27 - REDUTOR BREVINI - TRANSMISSÃO CÔNICA 00-5011 (Pág. 61)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 03112.23.900.38 | 01 | Carter |
| 2 | 03112.23.900.39 | 01 | Tampa |
| 3 | 03112.23.900.40 | 01 | Flange de Entrada |
| 4 | 03112.23.900.41 | 01 | Flange Intermediário |
| 5 | 03112.23.900.42 | 01 | Eixo Estriado |
| 7 | 03112.23.900.43 | 01 | Pinhão Cônico |
| 8 | 03112.23.900.44 | 01 | Coroa Cônica |
| 9 | 03112.23.900.45 | 01 | **Calço Separador |
| 10 | 03112.23.900.45 | 01 | **Calço Separador |
| 11 | 03112.23.900.46 | 01 | **Calço Separador |
| 12 | 03112.23.900.47 | 01 | **Calço Separador |
| 14 | 03104.25.010.0 | 03 | **Rolamento 30212 DIN720 |
| 15 | 03112.23.900.48 | 01 | **Rolamento 32014 DIN720 |
| 17 | 03112.23.900.49 | 01 | **Anel O’ring |
| 18 | 03112.23.900.50 | 01 | **Anel O’ring |
| 19 | 03112.23.900.51 | 01 | **Anel O’ring |
| 32 | 03112.23.900.53 | 07 | Tampão 3/8” |
| 3.1 | 03112.23.900.55 | 01 | Retentor BA60X85X10 |

### 28 - EIXO DE DESCARGA MOTORIZADO (Pág. 63)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.06.20.015.6 | 01 | Eixo dos Cames Descarga 62/95 |
| 2 | 194.06.50.021.01 | 01 | Ponteira Livre |
| 3 | 194.06.50.020.01 | 01 | Ponteira de Acionamento |
| 4 | 194.06.20.206.2 | 62 | Came Completo DL com ponteira |
| 5 | 01132.17.162.0 | 258 | Parafuso Sext. M8x025 DIN933 |
| 6 | 03133.11.029.0 | 251 | Porca Sext. M8 DIN934 |
| 7 | 03134.35.227.0 | 258 | Arruela de Pressão B8 DIN127 |
| 10 | 01132.17.406.0 | 08 | Parafuso Sextavado M16x50 DIN933 |
| 11 | 03134.35.043.1 | 16 | Arruela de Pressão B16 DIN127 |
| 12 | 01132.17.416.0 | 08 | Parafuso Sextavado M16x60 DIN933 |
| 13 | 03133.11.046.0 | 08 | Porca Sextavada M16 DIN934 |
| 14 | 03104.31.042.8 | 02 | Mancal Flangeado MSF 50 |
| 15 | 03137.10.653.0 | 01 | Chaveta A 12x8x63 DIN6885 |
| 16 | 03112.28.002.0 | 01 | Motoredutor FA57G DRE80N4 BMG AV1H |
| 17 | 194.06.50.029.01 | 01 | Contra Torque Eixo Descarga |
| 18 | 01132.16.376.0 | 01 | Parafuso Sextavado M12x90 DIN933 |
| 19 | 03133.11.036.0 | 01 | Porca Sextavada M12 DIN934 |
| 20 | 03021.26.035.1 | 01 | Arruela Lisa 13x24x2,5 |
| 21 | 03134.35.025.0 | 01 | Arruela de Pressão B12 DIN127 |

### 29 - GUIAS DE DESCARGA (Pág. 65)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.06.20.306.7 | 01 | Tubo Sustentação Guias P.95 |
| 2 | 01132.17.432.0 | 02 | Parafuso Sext. M16 x 080 DIN933 |
| 3 | 03133.11.049.0 | 16 | Porca Sext. M16 DIN934 |
| 4 | 194.06.20.308.1 | 08 | Mancal Nylon |
| 5 | 01132.17.327.0 | 16 | Parafuso Sext. M12 x 050 DIN933 |
| 6 | 03133.11.039.0 | 16 | Porca Sext. M12 DIN934 |
| 7 | 194.06.20.320.1 | 08 | Proteção Mancal |
| 8 | 03134.35.235.0 | 16 | Arruela Pressão B12 DIN127 |
| 9 | 194.06.20.258.2 | 63 | Suporte das Guias 95 |
| 10 | 01132.15.134.0 | 252 | Parafuso Cilindrico Sext. Int. M08 x 030 DIN912 |
| 11 | 03133.11.029.0 | 315 | Porca Sext. M08 DIN934 |
| 12 | 194.06.20.114.2 | 124 | Guia Deslizamento Divisão 95 |
| 13 | 194.06.20.116.1 | 63 | Suporte das Guias |
| 14 | 03021.26.227.0 | 63 | Arruela Lisa 8,4 x 16 x 1,6 DIN125 |
| 15 | 03134.35.227.0 | 315 | Arruela Pressão B08 DIN127 |
| 16 | 194.06.20.309.7 | 01 | Apoio Guias P.95 |
| 17 | 194.06.20.032.1 | 01 | Acabamento Esquerdo |
| 18 | 194.06.20.031.1 | 01 | Acabamento Direito |
| 20 | 01132.17.207.0 | 63 | Parafuso Sext. M10 x 016 DIN933 |
| 21 | 03134.35.231.0 | 63 | Arruela Pressão B10 DIN127 |
| 22 | 194.06.20.270.1 | 02 | Suporte do Sensor |
| 23 | 03022.12.373.0 | 04 | Mola Tração 22x4,5x13 (98) |
| 24 | 194.06.20.260.1 | 04 | Esticador |
| 25 | 03021.26.243.0 | 04 | Arruela Lisa 17 x 30 x 3 DIN 125 |
| 30 | 194.01.50.414.01 | 01 | Suporte Apoio das Guias Direito |
| 31 | 194.01.50.414.02 | 01 | Suporte Apoio das Guias Esquerdo |
| 32 | 01132.17.257.0 | 02 | Parafuso Sx. M10x50 DIN 933 |
| 33 | 03133.11.034.0 | 04 | Porca Sx. M10 DIN 934 |

### 30 - BANDEIROLA MOTORIZADA (Pág. 67)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.06.50.029.02 | 01 | Contra Torque Eixo de Descarga |
| 2 | 03112.28.001.0 | 01 | Motoredutor A FA37 G DRE80S4BE1 AS7W |
| 3 | 03137.10.441.0 | 01 | Chaveta A 8x7x40 DIN6885 |
| 4 | 03133.11.034.0 | 14 | Porca Sextavada M10 DIN934 |
| 5 | 03134.35.231.0 | 14 | Arruela de Pressão B10 DIN127 |
| 6 | 01132.17.321.7 | 08 | Parafuso Sextavado M12x45 DIN933 |
| 7 | 03021.26.035.1 | 09 | Arruela Lisa 13x24x2,5 DIN125 |
| 8 | 03134.35.035.1 | 09 | Arruela de Pressão B12 DIN127 |
| 9 | 03133.11.036.0 | 09 | Porca Sextavada M12 DIN934 |
| 10 | 01132.17.162.0 | 35 | Parafuso Sextavado M8x25 DIN933 |
| 11 | 01132.16.376.0 | 02 | Parafuso Sextavado M12x90 DIN933 |
| 12 | 199.06.50.069.03 | 01 | Bandeirola Conjunto 62/95 |
| 15 | 03133.11.029.0 | 44 | Porca Sextavada M8 DIN934 |
| 16 | 03021.26.227.0 | 12 | Arruela Lisa 8,4x16x1,6 DIN125 |
| 17 | 03134.35.227.0 | 44 | Arruela de Pressão B8 DIN127 |
| 18 | 194.06.50.048.16 | 02 | Mancal Celeron para Bandeirola DL |
| 19 | 01132.17.242.0 | 04 | Parafuso Sextavado M10x35 DIN933 |
| 20 | 03021.26.231.0 | 08 | Arruela Lisa 10,5x20x2,0 DIN125 |
| 29 | 194.06.50.048.04 | 02 | Suporte do Mancal para Bandeirola |
| 30 | 194.06.50.048.05 | 02 | Suporte do Mancal para Bandeirola |
| 31 | 03104.34.263.0 | 02 | Mancal SF35 |
| 34 | 194.06.50.024.01 | 02 | Batente de Pos. para Bandeirola |

### 31 - DEFLETORES DA BANDEIROLA (Pág. 69)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 10 | 01132.17.162.0 | 35 | Parafuso Sextavado M8x25 DIN933 |
| 15 | 03133.11.029.0 | 44 | Porca Sextavada M8 DIN934 |
| 17 | 03134.35.227.0 | 44 | Arruela de Pressão B8 DIN127 |
| 21 | 194.06.20.130.1 | 05 | Chapa Deslizante para Descarga |
| 22 | 194.06.20.135.1 | 01 | Perl Deslizante Esquerdo |
| 23 | 194.06.20.129.1 | 01 | Perl Deslizante Direito |
| 24 | 194.06.20.059.1 | 35 | Tubo Distanciador |
| 25 | 194.06.20.122.1 | 07 | Chapa Deslizante para Descarga |
| 26 | 194.06.20.019.6 | 01 | Deslizante para Descarga |
| 27 | 194.06.20.018.6 | 01 | Deslizante para Descarga |
| 28 | 194.06.20.017.6 | 01 | Deslizante para Descarga |

### 32 - TRANSPORTADOR DA DESCARGA (Pág. 71)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.06.20.271.1 | 08 | Mão Francesa |
| 2 | 01132.17.397.0 | 20 | Parafuso Sext. M16 x 040 DIN933 |
| 6 | 194.06.20.300.6 | 08 | Apoio do transportador |
| 10 | 194.06.20.277.6 | 01 | Carenagem Direita |
| 11 | 194.06.20.283.6 | 01 | Carenagem Esquerda |
| 16 | 194.06.20.303.7 | 01 | Carenagem Maq. 6240 |
| 19 | 194.06.20.276.7 | 01 | Corpo Maq. Larga 6240/8 esteiras |
| 23 | 194.06.20.278.6 | 01 | Cabeceira 8 esteiras |
| 24 | 194.06.20.284.6 | 01 | Cortina |
| 25 | 194.06.20.285.6 | 01 | Tala |
| 26 | 580.05.01.569.5 | 08 | Polia Retorno |
| 27 | 194.06.20.305.6 | 01 | Eixo Liso |
| 30 | 01207.62.316.0 | 157m | Tira 3x40 UHMW |
| 35 | 194.06.20.286.7 | 07 | Trilho do Transportador de Descarga |
| 40 | 03204.02.103.0 | 6,3m | Perfil U 7,5x12x1,5 NBR |

### 33 - ADAPTADORES DE DESCARGA (Pág. 73)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.06.05.536.1 | 63 | Adaptadores da Descarga - Espessura 20mm |

### 34 - CONJUNTO SACADOR DE GARRAFAS (Pág. 75)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 8 | 194.03.50.031.01 | 124 | Sacador de Garrafas |
| 9 | 03136.40.205.0 | 250 | Rebite POP 4,8x17,1 |

### 35 - EXTRATOR DUPLO (Pág. 77)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 2 | 194.08.05.359.13 | 01 | Esteira Descarga |
| 3 | 03104.31.041.8 | 02 | Mancal MSF45 |
| 4 | 194.08.50.073.09 | 02 | Junta Mancal 220 x 275 |
| 5 | 194.08.50.074.01 | 01 | Tampa Calha Esguicho |
| 9 | 194.08.20.785.01 | 02 | Roda Dentada Z=11 P=50.8 |
| 12 | 194.08.50.073.02 | 01 | Apoio Mancal com Esticador |
| 14 | 194.08.50.073.01 | 01 | Apoio Mancal com Esticador |
| 15 | 03137.10.028.0 | 01 | Chaveta A 14x9x70 DIN6885/1 |
| 16 | 03112.20.056.0 | 01 | M.R.SA67 DZ90L4 1,5kW 22rpm |
| 21 | 194.08.50.073.06 | 02 | Fuso Esticador M20 x 145 |
| 23 | 194.08.50.073.10 | 02 | Suporte DP Esticador M20 |
| 25 | 194.08.50.050.03 | 01 | Defletor |
| 27 | 194.08.50.052.01 | 02 | Esticador para Esteira Rotativa |
| 28 | 194.08.20.092.7 | 01 | Eixo ø45h11 x 1294 |
| 29 | 194.08.50.002.07 | 02 | Tampa de Cobertura |
| 30 | 194.01.05.127.1 | 03 | Porta de Inspeção Média |
| 31 | 194.08.50.073.11 | 01 | Contra Torque |
| 34 | 194.08.20.029.2 | 01 | Protetor Acionamento Bomba |
| 35 | 194.08.20.799.02 | 01 | Polia 5-C 580 x 55H7 |
| 37 | 03114.12.097.0 | 05 | Correia V-C112 |
| 38 | 03251.11.790.10 | 01 | Motor 40 CV 4 Polos 380/660V |
| 39 | 194.08.20.798.11 | 01 | Polia 5-C 158 x 55H7 |
| 58 | 194.10.05.070.5 | 02 | Cantoneira |
| 61 | 194.08.50.085.01 | 01 | Conj. Base Motor p/ ER c/ Elem. Fix. |

### 36 - CONJ. DA BOMBA 600 (Pág. 79)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 3 | 194.08.20.257.2 | 01 | Cabeçote com Hélice |
| 5 | 194.08.05.141.1 | 01 | Tampa Dianteira |
| 6 | 194.08.05.139.1 | 01 | Tampa Traseira |
| 8 | 194.08.05.149.1 | 01 | Anel Proteção ø138 x 80 x 23 |
| 11 | 194.08.20.641.1 | 01 | Eixo Bomba NW 600/500 |
| 12 | 194.08.20.260.1 | 01 | Flange Bomba 600/500 |
| 13 | 194.08.20.645.1 | 01 | Luva Intermediária da Bomba |
| 15 | 194.08.05.153.1 | 01 | Porca Especial |
| 17 | 194.08.05.151.1 | 01 | Chaveta |
| 19 | 194.08.05.157.1 | 01 | Tampão Respiro |
| 20 | 194.08.05.156.1 | 01 | Tampão |
| 21 | 03148.09.015.0 | 01 | Visor 1” BSP |
| 22 | 194.08.05.181.1 | 01 | Anel |
| 24 | 03137.10.131.0 | 01 | Chaveta A 16 x 10 x 80 DIN6885/1 |
| 25 | 01104.22.064.0 | 01 | Rolamento Ang. 70 x 150 x 63,5 3314 |
| 26 | 03104.17.014.0 | 01 | Rolamento Rolos Cônicos 85 x 150 x 28 NU 217 |
| 27 | 01134.40.012.0 | 01 | Arruela de Segurança MB14 DIN5406 |
| 28 | 01133.24.034.0 | 01 | Porca Tensora KM14 DIN981 |
| 29 | 01021.21.584.8 | 02 | Anel Elástico Interno 150 x 4 DIN472 |
| 30 | 03024.26.768.0 | 01 | Retentor DIN3760 BR 65 x 85,3 x 10 |
| 31 | 03024.26.859.0 | 01 | Retentor BR 85 x 110,25 x 12 DIN3760 |
| 32 | 03032.04.992.0 | 01 | Selo Mecânico 90 MG1/90-G4(Z) |
| 34 | 03026.03.028.0 | 01 | Anel O 74 x 2,5 |
| 35 | 03026.03.066.0 | 01 | Anel O 155 x 2,5 |
| 41 | 194.08.20.252.1 | 01 | Cabeçote |
| 42 | 194.08.20.253.1 | 04 | Pá de Hélice |
| 43 | 194.08.20.254.1 | 01 | Calota |
| 44 | 194.08.20.256.1 | 04 | Chapa Travamento |
| 45 | 194.08.20.255.1 | 04 | Arruela Aleta |
| 46 | 01132.17.538.0 | 04 | Parafuso Sext. M20 x 045 DIN933 |
| 47 | 01132.15.178.0 | 04 | Parafuso Cilíndrico Sext. Interno M10 x 25 DIN912 CL12.9 |

### 37 - EXTRATOR SIMPLES (Pág. 81)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 2 | 194.08.05.359.10 | 01 | Esteira Descarga |
| 3 | 03104.31.041.8 | 02 | Mancal MSF45 |
| 4 | 194.08.50.073.09 | 02 | Junta Mancal 220 x 275 |
| 5 | 194.08.50.074.02 | 01 | Tampa Calha Esguicho |
| 9 | 194.08.20.785.01 | 02 | Roda Dentada Z=11 P=50.8 |
| 12 | 194.08.50.073.02 | 01 | Apoio Mancal com Esticador |
| 13 | 03024.26.584.0 | 02 | Retentor DIN3760 BRG 45x62,25x10 NBR |
| 14 | 194.08.50.073.01 | 01 | Apoio Mancal com Esticador |
| 15 | 03137.10.028.0 | 01 | Chaveta A 14x9x70 DIN6885/1 |
| 16 | 03112.20.056.0 | 01 | Motoredutor A SA67 DRE90M4 1,5kW 22rpm |
| 21 | 194.08.50.073.06 | 02 | Fuso Esticador M20 x 145 |
| 23 | 194.08.50.073.10 | 02 | Suporte DP Esticador M20 |
| 25 | 194.08.50.050.04 | 01 | Defletor ER Simples |
| 27 | 194.08.50.052.01 | 02 | Esticador para Esteira Rotativa |
| 28 | 194.08.20.092.6 | 01 | Eixo ø45h11 x 894 |
| 29 | 194.08.50.002.08 | 02 | Tampa de Cobertura 520 x 990 |
| 30 | 194.01.05.127.1 | 02 | Porta de Inspeção Média |
| 31 | 194.08.50.073.11 | 01 | Contra Torque |
| 34 | 194.08.20.029.2 | 01 | Protetor Acionamento Bomba |
| 35 | 194.08.20.018.3 | 01 | Polia Bomba 571 3 Canais |
| 37 | 03114.12.097.0 | 03 | Correia V-C112 |
| 38 | 03251.11.710.1 | 01 | Motor 25cv 4P 160L B3E 380/660V 60Hz |
| 39 | 194.08.20.015.2 | 01 | Polia 3-C 178 x 42H7 |

### 39 - TRANSPORTADOR DOS EXTRATORES (Pág. 85)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 199.08.50.042.03 | 01 | Caixa Acionamento Esteira |
| 2 | 194.08.20.087.2 | 02 | Suporte Direito |
| 4 | 194.08.20.143.1 | 01 | Transportador Intermediário |
| 5 | 194.08.20.081.2 | 01 | Suporte Esquerdo |
| 6 | 194.08.20.148.1 | 01 | Caixa Esticadora |
| 7 | 194.08.20.149.1 | 01 | Tampa Caixa Acionamento |
| 9 | 194.08.20.151.1 | 01 | Tampa Caixa Acionamento |
| 10 | 194.08.50.024.00 | 01 | Braço de Torque |
| 11 | 03112.20.002.99 | 01 | Moto Redutor SA67 DZ90L 41,5kW 28H1A45 |
| 12 | 194.08.20.064.4 | 02 | Mancal para Escova Extrator |
| 13 | 01132.17.171.0 | 08 | Parafuso Sext. M08 x 30 DIN933 CL5.8 |
| 14 | 03133.11.026.0 | 10 | Porca Sext. M08 DIN934 CL5 |
| 15 | 03021.26.027.1 | 10 | Arruela Lisa 8,4 x 16 x 1,6 DIN 125 |
| 16 | 03134.35.027.1 | 10 | Arruela de Pressão B8 DIN127 |
| 17 | 01132.17.326.0 | 12 | Parafuso Sext. M12 x 50 DIN933 CL5.8 |
| 18 | 01132.17.391.0 | 04 | Parafuso Sext. M16 x 35 DIN933 CL5.8 |
| 19 | 194.08.20.052.2 | 02 | Arruela |
| 20 | 01132.17.151.0 | 06 | Parafuso Sext. M8 x 20 DIN933 CL5.8 |
| 22 | 03021.26.043.1 | 08 | Arruela Lisa 17 x 30 x 3 DIN125 |
| 23 | 194.08.20.147.1 | 01 | Protetor Acionamento Escova |
| 24 | 194.08.20.152.1 | 01 | Eixo Acionamento da Esteira |
| 25 | 194.08.50.091.01 | 01 | Esteira para Descarga L=500 |
| 26 | 194.08.20.088.2 | 02 | Suporte Esquerdo |
| 27 | 194.08.50.098.01 | 01 | Eixo da Caixa Esticadora |
| 28 | 194.08.20.057.1 | 02 | Flange |
| 30 | 194.08.20.044.1 | 01 | Roda Dentada da Escova |
| 31 | 03137.10.016.0 | 01 | Chaveta A 14 x 9 x 45 DIN6885/1 |
| 32 | 194.08.50.097.02 | 01 | Esticador do Mancal MSF30 Esq. |
| 33 | 194.08.20.038.1 | 01 | Roda Dentada Escova |
| 34 | 194.08.20.066.1 | 01 | Esticador para Corrente 1/2” |
| 35 | 194.08.20.043.3 | 02 | Roda Dentada Esteira |
| 37 | 01132.17.306.0 | 06 | Parafuso Sext. M12x30 DIN933 CL5.8 |
| 38 | 03137.26.108.0 | 01 | Pino elástico 6x50 DIN1481 |
| 39 | 194.08.20.045.1 | 01 | Escova para Esteira |
| 40 | 03137.10.332.0 | 01 | Chaveta A 6x6x28 DIN6885/1 |
| 42 | 194.08.20.785.01 | 02 | Roda Dentada Z=11 P=50,8 |
| 43 | 03132.47.322.0 | 08 | Parafuso de Fenda M16x50 DIN963 |
| 44 | 03133.11.046.0 | 04 | Porca Sext. M16 DIN934 CL.5 |
| 45 | 03137.10.019.0 | 02 | Chaveta A 14x9x5 DIN6885/1 |
| 46 | 03021.26.035.1 | 20 | Arruela Lisa 13x24x2,5 DIN125 |
| 47 | 03134.35.035.1 | 20 | Arruela de Pressão B12 DIN127 |
| 48 | 03133.11.036.0 | 18 | Porca Sext. M12 DIN934 CL.5 |
| 50 | 194.08.50.097.01 | 01 | Esticador para Mancal MSF30 Dir. |
| 51 | 03132.68.196.0 | 02 | Barra Roscada M12 x 150 DIN 976 CL5 |
| 52 | 03133.11.039.0 | 06 | Porca Sext. M12 DIN934 |
| 53 | 194.08.20.033.6 | 01 | Eixo Escova |
| 55 | 03115.79.037.0 | 0,6m | Corrente Rolo 1/2”x5/16” ASA 40 |
| 56 | 03115.79.382.0 | 01 | Emenda Trava 1/2” ASA 40-1 |
| 58 | 194.08.20.016.2 | 01 | Suporte Direito |
| 59 | 194.08.20.023.1 | 01 | Suporte Transportador |
| 60 | 194.08.20.079.1 | 01 | Protetor Esteira |
| 61 | 03137.10.034.0 | 01 | Chaveta A 14x9x90 DIN 6885 |
| 63 | 194.08.50.030.12 | 01 | Canal Transportador |
| 64 | 01132.17.151.0 | 04 | Parafuso Sext. M8x20 DIN933 CL5.8 |
| 65 | 03021.26.027.1 | 04 | Arruela Lisa 8,4x16x1,6 DIN125 |
| 66 | 03134.35.027.1 | 04 | Arruela de Pressão B8 DIN127 |
| 70 | 03137.10.547.0 | 02 | Chaveta A 10x8x50 DIN 6885/1 |
| 71 | 03104.31.038.8 | 02 | Mancal Flangeado MSF 30 |

### 40 - ESTEIRA ROT. CX. PEN. TQ. CARGA (Pág. 87)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 03104.31.041.8 | 02 | Mancal MSF 45 |
| 6 | 199.08.50.003.21 | 01 | Esteira Peneira Tq. Carga |
| 7 | 194.08.20.785.03 | 02 | Roda Dentada Z=11 P=50,8 |
| 11 | 03137.13.019.0 | 02 | Chaveta A 14 x 9 x 50 DIN6885/1 |
| 15 | 03137.13.034.0 | 01 | Chaveta A 14 x 9 x 90 DIN6885/1 |
| 16 | 899.05.00.521.60 | 01 | Moto Redutor SA 67 M4 1,1kW 13rpm eixo Ø45mm |
| 24 | 194.08.20.152.5 | 01 | Eixo Acionamento da Esteira Carga |
| 27 | 194.08.20.064.4 | 02 | Mancal p/ Escova Extrator |
| 33 | 194.08.20.044.2 | 01 | Roda Dentada da Escova |
| 34 | 03137.13.016.0 | 01 | Chaveta A 14 x 9 x 45 DIN6885/1 |
| 35 | 194.08.20.038.2 | 01 | Roda Dentada Escova |
| 36 | 194.08.20.066.3 | 01 | Esticador p/ Corrente 1/2” |
| 37 | 03137.26.108.0 | 01 | Pino (Bucha) Elástico 6 x 50 DIN1481 |
| 38 | 194.08.20.045.6 | 01 | Escova para Esteira |
| 39 | 03137.13.332.0 | 01 | Chaveta A 6 x 6 x 28 DIN6885/1 |
| 41 | 194.08.20.033.8 | 01 | Eixo Escova |
| 42 | 03115.79.037.0 | 01 | Corrente Rolo 1/2” x 5/16” ASA 40 (1metro) |
| 43 | 03115.79.382.0 | 01 | Emenda Trava 1/2” ASA40-1 |
| 60 | 194.08.50.098.05 | 01 | Eixo da Caixa Esticadora |
| 63 | 194.01.50.433.01 | 02 | Roda Dentada Esteira Z=10 P=50,8 |
| 66 | 03137.13.547.0 | 02 | Chaveta A 10 x 8 x 50 DIN 6885 / 1 |
| 67 | 03104.31.038.8 | 02 | Mancal Flangeado MSF 30 |

### 41 - ESTEIRA ROTATIVA ESG. TQ. REMOLHO (Pág. 89)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 03104.31.041.8 | 02 | Mancal MSF 45 |
| 6 | 199.08.50.003.23 | 01 | Esteira Peneira Esg. Água - Remolho |
| 7 | 194.08.20.785.03 | 02 | Roda Dentada Z=11 P=50,8 |
| 11 | 03137.10.019.0 | 02 | Chaveta A 14 x 9 x 50 DIN6885/1 |
| 15 | 03137.13.034.0 | 01 | Chaveta A 14 x 9 x 90 DIN6885/1 |
| 16 | 899.05.00.521.60 | 01 | Moto Redutor SA 67 M4 1,1kW 13rpm eixo Ø45 |
| 24 | 194.08.20.152.5 | 01 | Eixo Acion. Esteira Tanque DLS |
| 27 | 194.08.20.064.4 | 02 | Mancal p/ Escova Extrator |
| 33 | 194.08.20.044.2 | 01 | Roda Dentada da Escova |
| 34 | 03137.13.016.0 | 01 | Chaveta A 14 x 9 x 45 DIN6885/1 |
| 35 | 194.08.20.038.2 | 01 | Roda Dentada Escova |
| 36 | 194.08.20.066.3 | 01 | Esticador p/ Corrente 1/2” |
| 37 | 03137.26.108.0 | 01 | Pino (Bucha) Elástico 6 x 50 DIN1481 |
| 38 | 194.08.20.045.6 | 01 | Escova para Esteira |
| 39 | 03137.13.332.0 | 01 | Chaveta A 6 x 6 x 28 DIN6885/1 |
| 41 | 194.08.20.033.8 | 01 | Eixo Escova |
| 42 | 03115.79.037.0 | 1m | Corrente Rolo 1/2” x 5/16” ASA 40 |
| 43 | 03115.79.382.0 | 01 | Emenda Trava 1/2” ASA40-1 |
| 60 | 194.08.50.098.05 | 01 | Eixo da Caixa Esticadora |
| 61 | 194.08.50.097.01 | 01 | Esticador para Mancal MSF30 Direito |
| 62 | 194.08.50.097.02 | 01 | Esticador para Mancal MSF30 Esquerdo |
| 63 | 194.01.50.433.01 | 02 | Roda Dentada Z=10 P=50,8 |
| 66 | 03137.13.547.0 | 02 | Chaveta A 10 x 8 x 50 DIN 6885 / 1 |
| 67 | 03104.31.038.8 | 02 | Mancal Flangeado MSF 30 |
| 80 | 01132.17.327.0 | 20 | Parafuso Sext. M12 x 50 DIN933 CL5.8 |
| 81 | 03134.35.235.0 | 20 | Arruela de Pressão B12 DIN127 |
| 82 | 03021.26.235.0 | 20 | Arruela Lisa 13 x 24 x 2,5 DIN125 |
| 83 | 03133.11.039.0 | 04 | Porca Sext. M12 DIN934 CL.5 |

### 42 - PRÉ-ESGUICHAMENTO ZL 62/95 (Pág. 91)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 199.09.50.002.40 | 01 | Cx. Abastecimento Pré-esguichamento |
| 10 | 194.09.50.005. | 04 | Tubo Esguichamento Fixo p/ Pré-esguichamento |
| 11 | 03026.03.137.0 | 04 | Anel O 35,4 x 5,5 |

### 43 - TUBO ESGUICHO FIXO - PRÉ-ESGUICHAMENTO (Pág. 93)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.09.50.044.00 | 01 | Tubo |
| 5 | 194.09.20.232.1 | 02 | Tampa |
| 6 | 194.09.20.231.1 | 02 | Presilha |
| 7 | 194.09.20.233.1 | 02 | Junta |

### 44 - ESGUICHAMENTO MÓVEL COMPLETO (Pág. 95)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.09.50.047.02 | 02 | Caixa abastecimento |
| 2 | 194.09.20.235.3 | 03 | Base Caixa Abastecimento |
| 3 | 194.09.20.235.4 | 03 | Base Caixa Abastecimento |
| 4 | 194.09.20.398.01 | 01 | Travessa |
| 9 | 194.09.50.054.00 | 04 | Tubo Esguichamento Móvel |
| 10 | 194.09.50.005.02 | 02 | Tubo Esguichamento Fixo |
| 11 | 194.09.50.017.00 | 01 | Base Tubo Esguichamento |
| 13 | 194.09.50.017.01 | 02 | Base Tubo Esguichamento |
| 18 | 194.09.20.243.1 | 36 | Arruela Quadrada |
| 19 | 194.09.50.062.00 | 03 | Tubo Esguichamento Móvel |
| 20 | 194.09.20.399.01 | 01 | Travessa |

### 45 - TUBO ESGUICHAMENTO MÓVEL (Pág. 97)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.09.50.057.00 | 01 | Barra Esguichamento Total |
| 4 | 194.09.20.336.1 | 01 | Suporte Mancal |
| 5 | 194.09.50.024.00 | 01 | Tubo Quadrado Esguichamento Móvel |
| 6 | 194.09.50.055.03 | 01 | Estrela - Cubo Invertido |
| 9 | 03137.13.344.0 | 01 | Chaveta A 6x6x55 DIN6885/1 |
| 12 | 194.09.20.335.1 | 01 | Mancal |
| 13 | 194.09.20.247.1 | 62 | Esguicho Completo |
| 14 | 194.09.20.231.1 | 02 | Presilha |
| 15 | 194.09.20.232.1 | 02 | Tampa |
| 16 | 194.09.20.233.1 | 02 | Junta |

### 46 - ESGUICHO COMPLETO (Pág. 99)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.09.20.246.1 | 01 | Parte Superior do Esguicho |
| 2 | 194.09.20.245.1 | 01 | Base do Esguicho |
| 3 | 194.09.50.044.1 | 01 | Pistão do Esguicho Rotativo |
| 4 | 030.24.01.139.0 | 01 | Anel O’ring ø17,1 x 2,6 |
| 5 | 03024.01.173.0 | 01 | Anel O’ring ø23,4 x 2,6 |

### 47 - TUBO ESGUICHAMENTO FIXO ESGUICHO FINAL (Pág. 101)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.09.50.009. | 01 | Tubo |
| 5 | 194.09.20.232.1 | 02 | Tampa |
| 6 | 194.09.20.231.1 | 02 | Presilha |
| 7 | 194.09.20.233.1 | 02 | Junta |

### 48 - ESTRELA CUBO INVERTIDO (Pág. 103)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 2 | 194.09.50.056.01 | 01 | Cubo |
| 3 | 194.09.20.222.2 | 04 | Rolete |
| 4 | 194.09.20.241.2 | 04 | Pino |
| 5 | 03021.26.243.0 | 04 | Arruela Lisa 17 x 30 x 3 DIN125 |
| 6 | 03021.26.227.0 | 04 | Arruela Lisa 8 x 16 x 1,6 DIN125 |
| 7 | 03134.35.227.0 | 04 | Arruela de Pressão B8 DIN127 |
| 8 | 01132.17.152.0 | 04 | Parafuso Sext. M8 x 20 DIN933 |

### 79 - CONJ. DO EIXO DE ACIONAMENTO (Pág. 165)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.13.50.013.09 | 01 | Eixo Roda de Tração 62/95 |
| 2 | 194.13.20.136.1 | 57 | Roda de Tração Z29 |
| 3 | 03104.31.041.8 | 02 | Mancal MSF45 |
| 19 | 194.13.20.085.03 | 02 | Suporte do Eixo |
| 19.2 | 194.13.20.086.1 | 02 | Bucha Bi-Partida |
| 19.4 | 194.13.20.083.2 | 02 | Mancal Bi-Partido |
| 19.5 | 194.13.20.084.02 | 02 | Suporte do Mancal Bi-Partido |

### 80 - CONJ. DO EIXO DOS MEXEDORES (Pág. 167)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.13.50.012.09 | 01 | Eixo do Mexedor 62/95 |
| 2 | 194.13.20.133.3 | 32 | Mexedor |
| 5 | 03104.31.041.8 | 02 | Mancal MSF45 |
| 6 | 194.13.50.190.01 | 01 | Conjunto Alavanca dos Mexedores |
| 7 | 03132.08.419.0 | 32 | Parafuso Sext. M12 x 75 |
| 8 | 194.13.20.087.2 | 01 | Cursor |
| 9 | 194.13.20.124.1 | 01 | Eixo Rótula |
| 10 | 03104.02.058.0 | 02 | Rótula GE25ES |
| 11 | 194.13.20.588.2 | 01 | Excêntrico |
| 39 | 194.13.20.582.03 | 02 | Suporte do Eixo Mexedor |
| 39.2 | 194.13.20.082.1 | 02 | Bucha Bi-Partida |
| 39.4 | 194.13.20.083.1 | 02 | Mancal Bi-Partido |
| 39.6 | 194.13.20.581.02 | 02 | Suporte do Mancal Bi-Partido |

### 81 - CONJ. DO EIXO DE RETORNO (Pág. 169)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.13.50.011.06 | 01 | Eixo da Roda Livre 62/95 |
| 2 | 194.13.20.135.1 | 63 | Roda de Retorno |
| 3 | 03104.34.161.0 | 02 | Mancal MSFT45 |
| 19 | 194.13.20.085.03 | 02 | Suporte do Eixo |
| 19.2 | 194.13.20.086.1 | 02 | Bucha Bi-Partida |
| 19.4 | 194.13.20.083.2 | 02 | Mancal Bi-Partido |
| 19.5 | 194.13.20.084.2 | 02 | Suporte do Mancal Partido |

### 82 - CONJ. DO EIXO DE TRANSLAÇÃO (Pág. 171)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.13.50.153.08 | 01 | Eixo de Translação M T D 6240 |
| 2 | 194.13.50.163.01 | 01 | Ponteira Direita |
| 3 | 194.13.50.162.01 | 01 | Ponteira Esquerda |
| 4 | 03132.08.605.0 | 12 | Parafuso Sext. M16x55 |
| 5 | 03134.35.243.0 | 12 | Arruela de Pressão B16 |
| 6 | 03021.26.243.0 | 12 | Arruela Lisa 17x30x3 |
| 9 | 03104.31.046.8 | 02 | Mancal Flangeado MSF 70 |
| 10 | 01132.17.547.0 | 08 | Parafuso Sext. M20x55 |
| 11 | 03133.11.059.0 | 08 | Porca Sext. M20 |
| 12 | 03021.26.251.0 | 16 | Arruela Lisa 21x37x3 |
| 13 | 03134.35.251.0 | 08 | Arruela de Pressão B20 |

### 83 - CONJ. DO EIXO DOS CAMES (Pág. 173)
| Item | Código | Qtd. | Denominação |
| :--- | :--- | :--- | :--- |
| 1 | 194.13.50.147.18 | 01 | Eixos dos Cames Orbital MTD 6240 |
| 2 | 194.13.50.149.01 | 01 | Ponteira Direita |
| 3 | 194.13.50.150.01 | 01 | Ponteira Esquerda |
| 4 | 03132.08.605.0 | 04 | Parafuso Sext. M 16x55 DIN 931 |
| 5 | 03134.35.243.0 | 08 | Arruela de Pressão B16 DIN 127 |
| 6 | 03021.26.243.0 | 08 | Arruela Lisa 17x30x3 |
| 7 | 03132.08.611.0 | 04 | Parafuso Sext. M16 x 70 DIN931 |
| 8 | 194.13.50.124.01 | 124 | Came da Carga |
| 9 | 01132.17.152.0 | 372 | Parafuso Sext. M 8x020 DIN 933 |
| 10 | 03021.26.227.0 | 372 | Arruela Lisa 8,4x16x1,6 |
| 11 | 03134.35.227.0 | 372 | Arruela de Pressão B08 |
| 12 | 03104.31.042.8 | 02 | Mancal Flangeado MSF50 |
| 13 | 194.13.50.160.01 | 01 | Limitador Translação |
`;

export const MACHINES: Machine[] = [
    {
        id: "PASTEURIZADOR_L501",
        name: "Pasteurizador TPII 50/244",
        line: "Linha 501",
        description: "Pasteurizador de Túnel (13 Zonas)",
        content: PASTEURIZADOR_L501_CONTENT
    },
    {
        id: "LAVADORA_L503",
        name: "Lavadora de Garrafas",
        line: "Linha 503",
        description: "Lavadora 62/95 ZL 52/470 5ET",
        content: LAVADORA_L503_CONTENT
    }
];