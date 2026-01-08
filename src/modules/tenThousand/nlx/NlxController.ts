import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nlx")
export default class NlxController {
  @operation({
    summary: "Get Nlx",
  })
  @get()
  static getNlx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlx",
  })
  @post("{id}")
  static createNlx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
