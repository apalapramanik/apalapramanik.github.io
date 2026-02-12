# mmWave-Ray-Tracing

**3D Ray Tracing Framework for Wireless Propagation Modeling**

A MATLAB-based ray tracing simulator for modeling millimeter-wave (mmWave) signal propagation in indoor environments. Simulates free-space path loss, multi-bounce reflections, and log-normal shadowing effects.

![3D Ray Tracing Simulation](images/6.svg)

## Overview

This framework performs 3D ray tracing to model wireless signal propagation at mmWave frequencies. It traces rays from a transmitter through a configurable indoor environment, computing received power while accounting for:

- Free-space path loss
- Multiple reflections (up to N bounces)
- Log-normal shadowing
- Reflection coefficient losses

## Features

- **3D Indoor Environment Modeling** - Configurable office layout with rooms, walls, and partitions
- **Multi-Reflection Support** - Traces rays through up to 3 reflections
- **Path Loss Calculation** - Log-distance path loss model with configurable exponent
- **Shadowing Effects** - Log-normal shadowing with adjustable standard deviation
- **Power Visualization** - Color-coded ray paths showing received power gradient
- **GIF Generation** - Python utility for creating animated visualizations

## Project Structure

```
refactored-guacamole/
├── main.m                      # Main simulation script
├── main_simple.m               # Simplified simulation
├── setupEnvironment.m          # 3D office environment setup
├── plotRaysWithReflections.m   # Ray tracing and reflection handling
├── plotSimple.m                # Simplified plotting
├── plotTransmitter.m           # Transmitter visualization
├── extraPlotting.m             # Additional plotting utilities
├── ui.m                        # User interface utilities
├── img-gif.py                  # Python script for GIF generation
├── extras/                     # Additional resources
└── images/                     # Output visualizations (SVG, EPS)
```

## Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `txPower` | 15 dBm | Transmit power |
| `freq` | 24 GHz | Operating frequency (mmWave) |
| `reflection_coefficient` | 0.6 | Surface reflection coefficient |
| `pathLossExponent` | 3 | Path loss exponent (n) |
| `shadowingStdDev` | 8 dB | Log-normal shadowing σ |
| `maxReflections` | 3 | Maximum number of ray bounces |
| `powerThreshold` | -100 dBm | Minimum power to continue tracing |

## Environment

The default environment simulates an office layout (60m × 40m × 20m) with:
- 5 individual offices
- Break room
- Kitchen
- Outer walls and ceiling

## Usage

### Running the Simulation

```matlab
% Open MATLAB and navigate to the repository
cd refactored-guacamole

% Run the main simulation
main
```

### Customizing Parameters

Edit `main.m` to modify simulation parameters:

```matlab
% Transmitter position
Tx = [42, 20, 5];

% Simulation parameters
txPower = 15;              % dBm
reflection_coefficient = 0.6;
freq = 24e9;               % Hz (24 GHz)
pathLossExponent = 3;
shadowingStdDev = 8;       % dB
```

### Generating Animated GIFs

```bash
python img-gif.py
```

## Path Loss Model

The simulator uses the log-distance path loss model:

```
PL(d) = PL(d₀) + 10n·log₁₀(d/d₀) + Xσ
```

Where:
- `d₀` = 1m (reference distance)
- `n` = path loss exponent
- `Xσ` = log-normal shadowing (zero-mean Gaussian with std dev σ)

## Key Functions

| Function | Description |
|----------|-------------|
| `setupEnvironment()` | Creates 3D office environment with walls and rooms |
| `plotRaysWithReflections()` | Main ray tracing loop with reflection handling |
| `findClosestIntersection()` | Finds ray-surface intersection points |
| `reflectRay()` | Computes reflected ray direction from surface normal |
| `powerToColor()` | Maps received power to color gradient |
| `rayPlaneIntersection()` | Ray-plane intersection calculation |

## Output

- **Visualization**: 3D plot with color-coded rays (jet colormap)
- **Color Scale**: Received power from -100 dBm (blue) to 0 dBm (red)
- **Console Output**: Per-segment distance and power values
- **Image Export**: SVG and EPS formats in `images/` directory

## Technologies

- **MATLAB** - Core simulation and visualization
- **Python** - GIF generation utility
- **Pillow** - Image processing for animations

## Applications

- Indoor wireless network planning
- mmWave 5G coverage analysis
- Wi-Fi access point placement
- Wireless channel modeling research

## Contributors

Developed by **Apala Pramanik** and **Audrey Vazzana**
University of Nebraska-Lincoln





