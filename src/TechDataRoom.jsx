import React from 'react';

export function TechDataRoom() {
  return (
    <div className="glass-panel animate-fade-in" style={{ margin: '0 24px 40px 24px', padding: '32px', animationDelay: '0.4s' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--panel-border)', paddingBottom: '16px', marginBottom: '32px' }}>
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: '500', marginBottom: '8px' }}>Empirical Validation Data Room</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Comprehensive architecture benchmarks, quantization metrics, and hardware stress tests.</p>
        </div>
        <span style={{ fontSize: '12px', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.2)', background: 'rgba(16, 185, 129, 0.05)', padding: '6px 12px', borderRadius: '12px', letterSpacing: '1px' }}>CONFIDENTIAL</span>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
        
        <div className="widget" style={{ borderTop: '1px solid var(--panel-border)', paddingTop: '16px', margin: 0 }}>
          <h4 style={{ fontSize: '13px', color: 'var(--text-main)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6' }}></span>
            1. Algorithmic Complexity (FCR vs SOTA)
          </h4>
          <table className="data-table" style={{ width: '100%', fontSize: '11px' }}>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Transformer</th>
                <th>Mamba/RWKV</th>
                <th style={{ color: '#10b981' }}>FCR (MHHM)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Time Complexity</td><td>O(N²)</td><td>O(N)</td><td className="win">O(N)</td></tr>
              <tr><td>Space (VRAM)</td><td>O(N²)</td><td>O(N)</td><td className="win">O(1) Absolute</td></tr>
              <tr><td>Numerical Tracking</td><td>FP16</td><td>FP32</td><td className="win">CFloat32</td></tr>
              <tr><td>Memory Decay</td><td>Zero</td><td>Rapid</td><td className="win">Extremely Slow</td></tr>
            </tbody>
          </table>
        </div>

        <div className="widget" style={{ borderTop: '1px solid var(--panel-border)', paddingTop: '16px', margin: 0 }}>
          <h4 style={{ fontSize: '13px', color: 'var(--text-main)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6' }}></span>
            2. Empirical Hardware Benchmarks (L4 24GB)
          </h4>
          <table className="data-table" style={{ width: '100%', fontSize: '11px' }}>
            <thead>
              <tr>
                <th>Architecture</th>
                <th>Seq Length</th>
                <th>VRAM Matrix</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Transformer Native</td><td>4,096</td><td>1.0 GB</td><td>OK</td></tr>
              <tr><td>FCR CUDA Engine</td><td>4,096</td><td className="win">0.0 GB</td><td className="win">OK</td></tr>
              <tr><td>Transformer Native</td><td>16,384</td><td className="fail">&gt; 17.0 GB</td><td className="fail">OOM FAIL</td></tr>
              <tr><td>FCR CUDA Engine</td><td>16,384</td><td className="win">0.0 GB</td><td className="win">SUCCESS (3.5s)</td></tr>
            </tbody>
          </table>
        </div>

        <div className="widget" style={{ borderTop: '1px solid var(--panel-border)', paddingTop: '16px', margin: 0 }}>
          <h4 style={{ fontSize: '13px', color: 'var(--text-main)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6' }}></span>
            3. C++/CUDA Precision (Max Float Drift)
          </h4>
          <table className="data-table" style={{ width: '100%', fontSize: '11px' }}>
            <thead>
              <tr>
                <th>Metric (FP32)</th>
                <th>Max Absolute Error</th>
                <th>Viability Status</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Forward Pass</td><td>0.001032</td><td className="win">Perfect (in-margin)</td></tr>
              <tr><td>dQ Gradients</td><td>0.000915</td><td className="win">Perfect</td></tr>
              <tr><td>dK Gradients</td><td>0.001068</td><td className="win">Perfect</td></tr>
              <tr><td>dV Gradients</td><td>0.000936</td><td className="win">Perfect</td></tr>
            </tbody>
          </table>
        </div>

        <div className="widget" style={{ borderTop: '1px solid var(--panel-border)', paddingTop: '16px', margin: 0 }}>
          <h4 style={{ fontSize: '13px', color: 'var(--text-main)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#8b5cf6' }}></span>
            4. Convergence Log (FCR-125M)
          </h4>
          <table className="data-table" style={{ width: '100%', fontSize: '11px' }}>
            <thead>
              <tr>
                <th>Steps</th>
                <th>Cross-Entropy</th>
                <th>Cognitive Milestone</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>0</td><td>10.8200</td><td>Uniform Distribution</td></tr>
              <tr><td>80</td><td>3.5946</td><td>Token Patterns</td></tr>
              <tr><td>2,500</td><td>1.6302</td><td>Pronouns / Syntax</td></tr>
              <tr><td>10,000</td><td className="win">1.2666</td><td className="win">MVP Ready</td></tr>
            </tbody>
          </table>
        </div>

        <div className="widget" style={{ borderTop: '1px solid var(--panel-border)', paddingTop: '16px', margin: 0 }}>
          <h4 style={{ fontSize: '13px', color: 'var(--text-main)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#8b5cf6' }}></span>
            5. Quantization Impact (FCR-Q v2)
          </h4>
          <table className="data-table" style={{ width: '100%', fontSize: '11px' }}>
            <thead>
              <tr>
                <th>Format</th>
                <th>Disk Size</th>
                <th>Loss</th>
                <th>Omega Error</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>FP32 (PyTorch)</td><td>341.1 MB</td><td>3.5167</td><td>Baseline</td></tr>
              <tr><td>INT8 Dynamic</td><td>232.8 MB</td><td>3.4908</td><td>0.001112</td></tr>
              <tr><td className="win">FCR-Q v2 (INT16 Ω)</td><td className="win">123.5 MB (-64%)</td><td className="win">3.5065 (-0.01)</td><td className="win">0.000004</td></tr>
            </tbody>
          </table>
        </div>

        <div className="widget" style={{ borderTop: '1px solid var(--panel-border)', paddingTop: '16px', margin: 0 }}>
          <h4 style={{ fontSize: '13px', color: 'var(--text-main)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#8b5cf6' }}></span>
            6. Scalability Bottleneck (100 Users)
          </h4>
          <table className="data-table" style={{ width: '100%', fontSize: '11px' }}>
            <thead>
              <tr>
                <th>Tokens/User</th>
                <th>Transformer VRAM</th>
                <th>FCR VRAM</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1,000</td><td>4.68 GB</td><td className="win">2.70 GB</td></tr>
              <tr><td>4,000</td><td>18.75 GB</td><td className="win">2.70 GB</td></tr>
              <tr><td>8,000</td><td className="fail">OOM (CRASH)</td><td className="win">2.70 GB</td></tr>
              <tr><td>16,000</td><td className="fail">OOM (CRASH)</td><td className="win">2.70 GB</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
