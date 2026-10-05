import { useState, useEffect, useRef } from 'react';

const useAnimateOnScroll = (options) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                // We can unobserve after it becomes visible to prevent re-triggering
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1, ...options });

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        // Cleanup function
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options]);

    return [ref, isVisible];
};

export default useAnimateOnScroll;