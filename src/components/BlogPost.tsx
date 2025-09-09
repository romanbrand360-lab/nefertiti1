import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Phone, MessageCircle } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Artikel nicht gefunden</h1>
          <p className="text-xl text-gray-600 mb-8">
            Der gewünschte Blogartikel konnte nicht gefunden werden.
          </p>
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/"
            className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Zurück zur Startseite
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-4">
            <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center text-gray-500 mb-6">
            <Calendar className="w-5 h-5 mr-2" />
            <span className="mr-6">{post.date}</span>
            <User className="w-5 h-5 mr-2" />
            <span>{post.author}</span>
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-ul:text-gray-700 prose-li:mb-2 prose-strong:text-gray-900 prose-table:border-collapse prose-th:border prose-th:border-gray-300 prose-th:bg-gray-50 prose-th:p-3 prose-th:text-left prose-td:border prose-td:border-gray-300 prose-td:p-3"
          />
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interessiert an dieser Behandlung?
            </h3>
            <p className="text-gray-600 mb-6">
              Vereinbaren Sie jetzt einen Termin und lassen Sie sich von unseren Experten beraten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/491792305389"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Termin vereinbaren
              </a>
              <a 
                href="tel:+491792305389"
                className="inline-flex items-center px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Jetzt anrufen: +49 179 2305389
              </a>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="border-t border-gray-200 pt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Weitere interessante Artikel</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="mb-3">
                      <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                        {relatedPost.category}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-600 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                  </article>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;