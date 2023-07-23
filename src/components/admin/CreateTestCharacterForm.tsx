"use client"
import React, { useTransition } from "react"
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "../ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { createCharacter } from "../../../queries/test/testCharacterQueries"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"

const newCharacterFormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const CreateTestCharacterForm = () => {
  let [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof newCharacterFormSchema>>({
    resolver: zodResolver(newCharacterFormSchema),
    defaultValues: {
      name: "",
    },
  })

  const onSubmit = (values: z.infer<typeof newCharacterFormSchema>) => {
    startTransition(() =>
      createCharacter(values.name).finally(() => form.reset())
    )
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Character name:</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending} type="submit">
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default CreateTestCharacterForm
