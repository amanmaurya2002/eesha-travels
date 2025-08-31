'use server';
/**
 * @fileOverview AI-powered tool that suggests travel packages based on user's past searches and preferences, optionally considering destinations frequently tagged in social media by accounts the user follows.
 *
 * - socialMediaInfluencedRecommendations - A function that returns travel package recommendations based on user preferences and social media trends.
 * - SocialMediaInfluencedRecommendationsInput - The input type for the socialMediaInfluencedRecommendations function.
 * - SocialMediaInfluencedRecommendationsOutput - The return type for the socialMediaInfluencedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SocialMediaInfluencedRecommendationsInputSchema = z.object({
  pastSearches: z
    .string()
    .describe('The user\'s past travel searches, as a comma separated list.'),
  preferences: z
    .string()
    .describe('The user\'s travel preferences, as a comma separated list.'),
  socialMediaTags: z
    .string()
    .optional()
    .describe(
      'Optional: Destinations frequently tagged in social media by accounts the user follows, as a comma separated list.'
    ),
});
export type SocialMediaInfluencedRecommendationsInput = z.infer<
  typeof SocialMediaInfluencedRecommendationsInputSchema
>;

const SocialMediaInfluencedRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe(
      'A list of recommended travel packages, based on the user\'s past searches, preferences, and social media trends.'
    ),
});
export type SocialMediaInfluencedRecommendationsOutput = z.infer<
  typeof SocialMediaInfluencedRecommendationsOutputSchema
>;

export async function socialMediaInfluencedRecommendations(
  input: SocialMediaInfluencedRecommendationsInput
): Promise<SocialMediaInfluencedRecommendationsOutput> {
  return socialMediaInfluencedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'socialMediaInfluencedRecommendationsPrompt',
  input: {
    schema: SocialMediaInfluencedRecommendationsInputSchema,
  },
  output: {
    schema: SocialMediaInfluencedRecommendationsOutputSchema,
  },
  prompt: `You are a travel expert. You will generate travel package recommendations based on the user\'s past searches, preferences, and social media trends.

Past Searches: {{{pastSearches}}}
Preferences: {{{preferences}}}
Social Media Trends: {{#if socialMediaTags}}{{{socialMediaTags}}}{{else}}None{{/if}}`,
});

const socialMediaInfluencedRecommendationsFlow = ai.defineFlow(
  {
    name: 'socialMediaInfluencedRecommendationsFlow',
    inputSchema: SocialMediaInfluencedRecommendationsInputSchema,
    outputSchema: SocialMediaInfluencedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
