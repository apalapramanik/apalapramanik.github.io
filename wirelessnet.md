# Multi-Modal Traffic Pattern Detection Using Radio and Camera Sensing

## Project Overview
This project implements a deep-learning-based **traffic pattern detection system** using multi-modal data (radio signals and camera images). The system captures real-time radio frequency (RF) signals via a Universal Software Radio Peripheral (USRP) and synchronizes them with camera images to classify traffic patterns into:
- **Very Busy**
- **Moderate**
- **Not Busy**

The system ensures:
- **High Accuracy**: >80% classification accuracy.
- **Low Latency**: Predictions generated within 100 milliseconds.
- **Reliability**: Continuous monitoring and error recovery through a watchdog mechanism.

---

## Features
- **Multi-Modal Data Integration**: Combines RF signals and visual data for robust traffic detection.
- **Deep Learning Classification**: Utilizes a **Complex-Valued Neural Network (CVNN)** for multi-class classification.
- **Error Handling**: Implements a watchdog system to log errors and recover during failures.
- **Real-Time Predictions**: Provides live traffic state classification with synchronized inputs.

---

## Data Collection
The system collects:
- **RF Signals**: Captured every 1 second and stored in binary format.
- **Camera Images**: Synchronized images stored in JPEG format.

Timestamps ensure alignment of signals and images to within **±10 ms** for accurate classification.

---
## Code Explanation
The Project contains four code files:
- **RV_CNN_folder_base.ipynb**: signals are classified on the basis of time slot (folder) using real valued CNN.
- **CV_CNN_folder_base.ipynb**: signals are classified on the basis of time slot (folder) using complex valued CNN.
- **3_classes_all_models_image_basis.ipynb**: signals are classified on the basis of number of vehicles in the images for three classes: Not Busy, Moderate, and Busy.
- **binary_all_models_image_basis.ipynb**: signals are classified on the basis of number of vehicles in the images for two classes: Not Busy, and Busy.



---

## Results
The system achieves the following performance:
- **Classification Accuracy**: >80% on test data.
- **Prediction Latency**: <100 ms, meeting real-time requirements.
- **System Reliability**: Automatic recovery and error logging through the watchdog system.

Results are logged and available for further analysis.

---

## Contact
For further inquiries or collaboration opportunities, please contact the **WirelessNet Group**:
- **Khalil Ahmad**
- **Apala Pramanik**
- **Audrey Vazzana**
- **Raoul Nya**
