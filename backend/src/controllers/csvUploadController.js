import { generateResponseFormat } from "../utils/generateResponseFormat.js";
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { Readable } from 'stream';

// Convert the worker file URL to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const workerFilePath = resolve(__dirname, '../workers/parseCSV.worker.js');

export const csvUploadController = (req, res) => {
    const worker = spawn('node', [workerFilePath], {
        stdio: ['pipe', 'pipe', 'pipe'] // Ensure stdio is set to pipe
    });
    
    worker.on('close', (code) => {
        console.log(`Worker process exited with code ${code}`);
    });

    worker.stdout.on('data', (data) => {
        console.log(`Worker stdout: ${data}`);
    });

    worker.stderr.on('data', (data) => {
        console.error(`Worker stderr: ${data}`);
    });

    const readable = new Readable();
    readable.push(req.file.buffer);
    readable.push(null);
    
    readable.pipe(worker.stdin);
    // req.pipe(worker.stdin);

    res.status(200).send(
        generateResponseFormat(
            'File is being processed.',
            200,
            'success',
            null,
        )
    );
}
