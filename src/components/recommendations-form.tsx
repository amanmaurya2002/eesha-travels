'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { socialMediaInfluencedRecommendations, SocialMediaInfluencedRecommendationsOutput } from '@/ai/flows/social-media-influenced-recommendations';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Wand2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
  pastSearches: z.string().min(3, 'Please enter some past searches (e.g., "beaches in Thailand", "museums in Italy").'),
  preferences: z.string().min(10, 'Please describe your preferences in more detail (e.g., "I love relaxing on the beach, trying new food, and some light hiking.").'),
  socialMediaTags: z.string().optional(),
});

export function RecommendationsForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SocialMediaInfluencedRecommendationsOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pastSearches: '',
      preferences: '',
      socialMediaTags: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await socialMediaInfluencedRecommendations(values);
      setResult(response);
    } catch (e) {
      setError('Failed to get recommendations. Please try again.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Tell Us Your Travel Dreams</CardTitle>
        <CardDescription>The more details you provide, the better we can tailor your recommendations.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="pastSearches"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Past Searches</FormLabel>
                  <FormControl>
                    <Input placeholder='e.g., "beaches in Thailand", "museums in Italy"' {...field} />
                  </FormControl>
                  <FormDescription>
                    What kind of destinations have you looked for before?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="preferences"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Travel Preferences</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., I love relaxing on the beach, trying new food, and some light hiking."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                   <FormDescription>
                    What do you enjoy doing on vacation?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="socialMediaTags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Social Media Inspiration (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., #greecetravel, #japan, #adventure" {...field} />
                  </FormControl>
                  <FormDescription>
                    Destinations you've seen on social media that caught your eye.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading} size="lg" className="w-full" style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Generate Recommendations
                </>
              )}
            </Button>
          </form>
        </Form>

        {error && <p className="mt-6 text-center text-destructive">{error}</p>}
        {result && (
          <div className="mt-8 pt-8 border-t">
            <h3 className="font-headline text-2xl font-bold text-center mb-4">Your Personalized Suggestions</h3>
            <div className="prose prose-lg max-w-none font-body text-foreground">
              {result.recommendations.split(',').map((rec, index) => (
                <div key={index} className="p-4 mb-2 bg-secondary/30 rounded-lg">{rec.trim()}</div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
