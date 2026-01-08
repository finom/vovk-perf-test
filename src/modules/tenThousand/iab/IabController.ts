import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iab")
export default class IabController {
  @operation({
    summary: "Get Iab",
  })
  @get()
  static getIab = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iab",
  })
  @post("{id}")
  static createIab = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
