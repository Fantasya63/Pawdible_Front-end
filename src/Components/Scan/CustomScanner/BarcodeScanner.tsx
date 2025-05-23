import React, { useEffect, useRef } from 'react';
import {
  BrowserMultiFormatReader,
  BarcodeFormat,
  IScannerControls,
} from '@zxing/browser';

interface BarcodeScannerProps {
  onDetected: (barcode: string) => void;
}

const BarcodeScanner: React.FC<BarcodeScannerProps> = ({ onDetected }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const scannerControlsRef = useRef<IScannerControls | null>(null);

  useEffect(() => {
    const hints = new Map();
    hints.set('possibleFormats', [
      BarcodeFormat.EAN_13,
      BarcodeFormat.EAN_8,
      BarcodeFormat.UPC_A,
      BarcodeFormat.UPC_E,
      BarcodeFormat.CODE_128,
    ]);

    const codeReader = new BrowserMultiFormatReader(hints);

    const startScanner = async () => {
      try {
        const controls = await codeReader.decodeFromVideoDevice(
          undefined,
          videoRef.current!,
          (result, error) => {
            if (result) {
              const code = result.getText();
              if (navigator.vibrate) navigator.vibrate(200);
              onDetected(code);
              scannerControlsRef.current?.stop();
            }
          }
        );
        scannerControlsRef.current = controls;
      } catch (err) {
        alert("Error: " + "Failed to start barcode scanner:" + err);
        console.error("Failed to start barcode scanner:", err);
      }
    };

    startScanner();

    return () => {
      scannerControlsRef.current?.stop();
    };
  }, [onDetected]);

  return (
    <div className="w-full">
      <video ref={videoRef} width="100%" height="300" />
    </div>
  );
};

export default BarcodeScanner;
