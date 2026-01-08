import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("adl")
export default class AdlController {
  @operation({
    summary: "Get Adl",
  })
  @get()
  static getAdl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adl",
  })
  @post("{id}")
  static createAdl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
