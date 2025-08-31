import { RecommendationsForm } from '@/components/recommendations-form';
import { Sparkles } from 'lucide-react';

export default function RecommendationsPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
             <Sparkles className="h-10 w-10 text-primary" />
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">Personalized Recommendations</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Let our AI-powered tool craft the perfect travel itinerary for you. Simply share your travel style, and we'll handle the rest!
          </p>
        </div>
        <RecommendationsForm />
      </div>
    </div>
  );
}
