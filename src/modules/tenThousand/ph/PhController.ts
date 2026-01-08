import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ph")
export default class PhController {
  @operation({
    summary: "Get Ph",
  })
  @get()
  static getPh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ph",
  })
  @post("{id}")
  static createPh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
