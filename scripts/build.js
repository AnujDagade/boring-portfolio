const fs = require('fs');
const path = require('path');
const marked = require('marked');

// Configuration
const BLOG_DIR = path.join(__dirname, '../blogs');
const OUT_DIR = path.join(__dirname, '../blog');
const TEMPLATE_PATH = path.join(__dirname, '../templates/blog-post.html');
const INDEX_TEMPLATE_PATH = path.join(__dirname, '../templates/blog-index.html');

// Ensure output directory exists
if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
}

// Helper to parse frontmatter
function parseFrontmatter(content) {
    const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) {
        return { metadata: {}, body: content };
    }

    const metadata = {};
    const frontmatterLines = match[1].split('\n');
    frontmatterLines.forEach(line => {
        const [key, ...value] = line.split(':');
        if (key && value) {
            metadata[key.trim()] = value.join(':').trim();
        }
    });

    return { metadata, body: match[2] };
}

// Read template
function getTemplate(path) {
    if (fs.existsSync(path)) {
        return fs.readFileSync(path, 'utf-8');
    }
    return '';
}

// Main build function
function build() {
    console.log('Building blog...');

    const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.md'));
    const posts = [];

    const postTemplate = getTemplate(TEMPLATE_PATH);

    files.forEach(file => {
        const content = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
        const { metadata, body } = parseFrontmatter(content);
        const htmlContent = marked.parse(body);
        const slug = file.replace('.md', '');

        // Save post data for index
        posts.push({
            slug,
            title: metadata.title || 'Untitled',
            date: metadata.date || 'No date',
            description: metadata.description || '',
            ...metadata
        });

        // Generate individual post page
        let pageHtml = postTemplate
            .replace('{{title}}', metadata.title || 'Blog Post')
            .replace('{{content}}', htmlContent)
            .replace('{{date}}', metadata.date || '')
            .replace('{{author}}', 'Anuj Dagade');

        fs.writeFileSync(path.join(OUT_DIR, `${slug}.html`), pageHtml);
        console.log(`Generated blog/${slug}.html`);
    });

    // Generate Index Page
    // For simplicity, we'll just generate a simple list for now, 
    // or we could use a template if we had one.
    // Let's assume we want to inject this list into a blog.html file 
    // or create a new index.html in the blog folder.

    const indexTemplate = getTemplate(INDEX_TEMPLATE_PATH);
    if (indexTemplate) {
        const postsListHtml = posts
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map(post => `
                <article class="blog-preview">
                    <span class="blog-date">${post.date}</span>
                    <h3><a href="${post.slug}.html">${post.title}</a></h3>
                    <p>${post.description}</p>
                </article>
            `).join('');

        const indexHtml = indexTemplate.replace('{{posts}}', postsListHtml);
        fs.writeFileSync(path.join(OUT_DIR, 'index.html'), indexHtml);
        console.log('Generated blog/index.html');
    }
}

build();
