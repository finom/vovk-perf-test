import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nlw")
export default class NlwController {
  @operation({
    summary: "Get Nlw",
  })
  @get()
  static getNlw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlw",
  })
  @post("{id}")
  static createNlw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
