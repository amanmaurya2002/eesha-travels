'use server';
/**
 * @fileOverview Provides personalized travel package recommendations based on user preferences.
 *
 * - personalizedTravelRecommendations - A function that returns travel recommendations.
 * - PersonalizedTravelRecommendationsInput - The input type for the personalizedTravelRecommendations function.
 * - PersonalizedTravelRecommendationsOutput - The return type for the personalizedTravelRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedTravelRecommendationsInputSchema = z.object({
  pastSearches: z
    .string()
    .describe('A comma separated list of the users past travel destinations search queries.'),
  preferences: z
    .string()
    .describe('A description of the users travel preferences, such as beach vacations, or mountain vacations.'),
  socialMediaTags: z
    .string()
    .optional()
    .describe('Optional: A comma separated list of destination tags from social media accounts the user follows.'),
});
export type PersonalizedTravelRecommendationsInput = z.infer<
  typeof PersonalizedTravelRecommendationsInputSchema
>;

const PersonalizedTravelRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('A comma separated list of recommended travel packages.'),
});
export type PersonalizedTravelRecommendationsOutput = z.infer<
  typeof PersonalizedTravelRecommendationsOutputSchema
>;

export async function personalizedTravelRecommendations(
  input: PersonalizedTravelRecommendationsInput
): Promise<PersonalizedTravelRecommendationsOutput> {
  return personalizedTravelRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedTravelRecommendationsPrompt',
  input: {schema: PersonalizedTravelRecommendationsInputSchema},
  output: {schema: PersonalizedTravelRecommendationsOutputSchema},
  prompt: `You are a travel agent specializing in providing personalized travel package recommendations.

  Based on the user's past searches, preferences, and optionally, social media tags, provide a list of recommended travel packages.

  Past Searches: {{{pastSearches}}}
  Preferences: {{{preferences}}}
  Social Media Tags: {{socialMediaTags}}

  Recommendations:`,
});

const personalizedTravelRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedTravelRecommendationsFlow',
    inputSchema: PersonalizedTravelRecommendationsInputSchema,
    outputSchema: PersonalizedTravelRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
