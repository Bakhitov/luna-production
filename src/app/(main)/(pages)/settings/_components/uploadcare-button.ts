'use client'; // is needed only if you’re using React Server Components
import { FileUploaderRegular } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';

function App() {
  return (
    <div>
      <FileUploaderRegular pubkey='bce9c7f8154d3decd779' />
    </div>
  );
}

export default App;
