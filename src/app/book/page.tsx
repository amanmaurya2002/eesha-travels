
'use client';

import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, PlaneTakeoff, User, Calendar as CalendarIconLucide, Mail, Phone } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

const bookingFormSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }).optional(),
  destination: z.string().min(1, { message: 'Please select a destination.' }),
  travelDate: z.date({ required_error: 'A date of travel is required.' }),
  travelers: z.coerce.number().min(1, { message: 'There must be at least one traveler.' }),
});

function BookingForm() {
  const searchParams = useSearchParams();
  const packageId = searchParams.get('package') || '';
  const { toast } = useToast();

  const form = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      destination: packageId,
      travelers: 1,
    },
  });

  function onSubmit(data: z.infer<typeof bookingFormSchema>) {
    console.log(data);
    toast({
      title: 'Booking Request Submitted!',
      description: "We've received your request and will be in touch shortly to confirm the details.",
    });
    form.reset();
  }

  return (
    <div className="bg-secondary/40 py-16 md:py-24">
      <div className="container mx-auto max-w-2xl px-4">
        <Card>
          <CardHeader className="text-center">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4 mx-auto w-fit">
              <PlaneTakeoff className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="font-headline text-4xl">Book Your Dream Trip</CardTitle>
            <CardDescription>Fill out the form below to start your adventure.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="destination"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Destination</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder="Select a package" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="kashmir-paradise">Kashmir Paradise</SelectItem>
                          <SelectItem value="goa-beach-bliss">Goa Beach Bliss</SelectItem>
                          <SelectItem value="rajasthan-royal">Rajasthan Royal Tour</SelectItem>
                          <SelectItem value="kerala-backwaters">Kerala Backwaters</SelectItem>
                          <SelectItem value="himachal-adventure">Himachal Adventure</SelectItem>
                          <SelectItem value="golden-triangle">Golden Triangle Tour</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                    control={form.control}
                    name="travelDate"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                        <FormLabel>Travel Date</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                variant={'outline'}
                                className={cn(
                                    'pl-3 text-left font-normal',
                                    !field.value && 'text-muted-foreground'
                                )}
                                >
                                {field.value ? (
                                    format(field.value, 'PPP')
                                ) : (
                                    <span>Pick a date</span>
                                )}
                                <CalendarIconLucide className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date() || date < new Date('1900-01-01')}
                                initialFocus
                            />
                            </PopoverContent>
                        </Popover>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="travelers"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Number of Travelers</FormLabel>
                        <FormControl>
                            <Input type="number" min="1" placeholder="1" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>

                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Komal Maurya" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+91 98765 43210" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address (Optional)</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="komal@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" size="lg" style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}}>
                    Submit Booking Request
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <BookingForm />
    </React.Suspense>
  )
}
