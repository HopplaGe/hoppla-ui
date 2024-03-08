import {Button} from "@/components";

function App() {
    return (
        <div className="w-full h-screen grid place-content-center gap-4">
            <div className="flex gap-4">
                <div className="flex flex-col gap-4">
                    <Button
                        color="primary"
                        size="sm"
                        label="Primary Button"
                        type="link"
                        animation
                    />
                    <Button
                        color="primary"
                        size="sm"
                        label="Primary Button"
                        type="outline"
                        animation
                    />
                    <Button
                        color="primary"
                        size="sm"
                        label="Primary Button"
                        type="solid"
                        rounded="xl"
                        animation
                    />
                    <Button
                        color="primary"
                        size="sm"
                        label="Primary Button"
                        type="ghost"
                        animation
                    />
                </div>
                <div className="flex flex-col gap-4">..</div>
                <div className="flex flex-col gap-4">ss</div>
                <div className="flex flex-col gap-4">ss</div>
            </div>
        </div>
    );
}

export default App;
