interface StoredData {
    timestamp: number;
    value: any;
}

export function getValue(key: string): any | null {
    const found = localStorage.getItem(key);

    if (!found) {
        return null;
    }

    return (JSON.parse(found) as StoredData).value;
}

export function setValue(key: string, value: string): void {
    const timestamp = new Date().getTime();

    localStorage.setItem(key, JSON.stringify({
        timestamp,
        value
    }));
}
