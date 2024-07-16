import { supabase } from "../utils/supabaseClient";
import { Event } from "@/types/event";

export const getEvents = async (): Promise<Event[]> => {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .order("date", { ascending: true });
  if (error) throw error;
  return data || [];
};

export const createEvent = async (event: Event): Promise<Event> => {
  const { data, error } = await supabase.from("events").insert(event).single();
  if (error) throw error;
  return data;
};
