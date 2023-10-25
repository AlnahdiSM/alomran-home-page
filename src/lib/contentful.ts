import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import type {
  EntryQueries,
  EntriesQueries,
  Entry,
  EntryFieldTypes,
} from "contentful";
import { createClient } from "contentful";

type InfoBarEntrySkeleton = {
  contentTypeId: "informationBar";
  fields: {
    location: EntryFieldTypes.Symbol;
    phoneNumber: EntryFieldTypes.Symbol;
    email: EntryFieldTypes.Symbol;
  };
};
/**
 * this instant is used for reading the content from contentful :) use it everywhere in SSR or SSC.
 * CSC is not supported in this code :). thank you
 */
export const client = () =>
  createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
    accessToken: process.env
      .NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN as string,
  });
  
export const getInformationBar = () =>
  client().getEntries<InfoBarEntrySkeleton>({
    content_type: "informationBar",
  });






