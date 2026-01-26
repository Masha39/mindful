"use client";

import { ArrowRight, X } from "lucide-react";
import { Root, Trigger, Portal, Content, Close } from "@radix-ui/react-popover";
import { useGetMoods } from "@/hooks/api/mood/useGetMoods";
import { useState } from "react";
import { Mood } from "@/hooks/api/mood/types";

const defaultMood: Mood = {
  id: 1,
  emoji: "😊",
  name: "Mood",
};

export const MoodInput = () => {
  return (
    <div className="max-w-2xl mx-auto mb-16">
      <div className="bg-card rounded-2xl shadow-xl border border-border/50 p-2">
        <textarea
          autoFocus={true}
          placeholder={"How are you feeling today?"}
          className="flex w-full rounded-md border border-input px-2 py-2 transition-colors duration-150 ease-in-out placeholder:text-muted-foreground
                 hover:border-ring/20 focus-visible:border-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:border-input disabled:opacity-50
                  resize-none border-none text-[16px] leading-snug placeholder-shown:text-ellipsis placeholder-shown:whitespace-nowrap md:text-base 
                  focus-visible:border-none focus-visible:ring-0 focus-visible:ring-offset-0 max-h-[max(35svh,5rem)] bg-transparent focus:bg-transparent flex-1 field-sizing-content mb-2"
        ></textarea>
        <div className="flex items-center gap-3 px-2">
          <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
            <span className="text-xl">+</span>
          </button>
          <MoodButton />
          <div className="flex-1" />
          <button className="p-2 rounded-lg bg-gradient-to-r from-orange-400 to-pink-500 text-white">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const MoodButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMood, setSelectedMood] = useState<Mood>(defaultMood);

  const { data } = useGetMoods();

  const handleSelectMood = (mood: Mood) => {
    setSelectedMood(mood);
    setIsOpen(false);
  };

  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <Trigger asChild>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border text-sm text-muted-foreground cursor-pointer">
          <span className="text-lg">{selectedMood.emoji}</span>
          {selectedMood.name}
        </button>
      </Trigger>
      <Portal>
        <Content className="PopoverContent" sideOffset={5}>
          <div className="flex flex-col gap-2 bg-card rounded-lg p-2 shadow-lg border border-border">
            <div className="flex w-full align-middle justify-end cursor-pointer">
              <Close className="PopoverClose cursor-pointer" aria-label="Close">
                <X className="w-4 h-4" />
              </Close>
            </div>
            <div className="flex gap-2 max-w-[300px] flex-wrap">
              {data?.map((mood: Mood) => (
                <button
                  key={mood.id}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border text-sm text-muted-foreground cursor-pointer shadow-sm"
                  onClick={() => handleSelectMood(mood)}
                >
                  <span className="text-lg">{mood.emoji}</span>
                  {mood.name}
                </button>
              ))}
            </div>
          </div>
        </Content>
      </Portal>
    </Root>
  );
};
