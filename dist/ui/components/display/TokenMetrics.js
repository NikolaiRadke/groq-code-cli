import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Box, Text } from 'ink';
export default function TokenMetrics({ isActive, isPaused, startTime, endTime, pausedTime, completionTokens }) {
    const [displayTime, setDisplayTime] = useState('0.0s');
    const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);
    const loadingMessages = ['GroqThinking', 'GroqMaxxing', 'GroqCoding'];
    // Update the display time every 100ms when active and not paused
    useEffect(() => {
        if (!isActive || isPaused) {
            return;
        }
        const updateDisplay = () => {
            if (!startTime) {
                setDisplayTime('0.0s');
                return;
            }
            // Calculate elapsed time minus paused time
            const currentElapsed = Date.now() - startTime.getTime() - pausedTime;
            setDisplayTime(`${(currentElapsed / 1000).toFixed(1)}s`);
        };
        // Update immediately, then set interval
        updateDisplay();
        const interval = setInterval(updateDisplay, 100);
        return () => clearInterval(interval);
    }, [isActive, isPaused, startTime, pausedTime]);
    // Reset loading message index when becoming active and not paused
    useEffect(() => {
        if (isActive && !isPaused) {
            setLoadingMessageIndex(0);
        }
    }, [isActive, isPaused]);
    // Cycle through loading messages every 2 seconds when active and not paused
    useEffect(() => {
        if (!isActive || isPaused) {
            return;
        }
        const interval = setInterval(() => {
            setLoadingMessageIndex((prevIndex) => (prevIndex + 1) % loadingMessages.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [isActive, isPaused, loadingMessages.length]);
    // Update display when request completes
    useEffect(() => {
        if (!isActive && endTime && startTime) {
            const finalElapsed = endTime.getTime() - startTime.getTime() - pausedTime;
            setDisplayTime(`${(finalElapsed / 1000).toFixed(1)}s`);
        }
    }, [isActive, endTime, startTime, pausedTime]);
    const getElapsedTime = () => {
        return displayTime;
    };
    const getStatusText = () => {
        if (isPaused)
            return '⏸ Waiting for approval...';
        if (isActive)
            return `⚡ ${loadingMessages[loadingMessageIndex]}...`;
        return '';
    };
    // Don't show component if inactive and no tokens counted
    if (!isActive && completionTokens === 0) {
        return null;
    }
    return (_jsx(Box, { paddingX: 1, children: _jsxs(Box, { gap: 2, children: [_jsx(Text, { color: "cyan", children: getElapsedTime() }), _jsxs(Text, { color: "green", children: [completionTokens, " tokens"] }), (isActive || isPaused) && (_jsx(Text, { color: isPaused ? 'yellow' : 'blue', children: getStatusText() }))] }) }));
}
//# sourceMappingURL=TokenMetrics.js.map