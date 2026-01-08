import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lfq")
export default class LfqController {
  @operation({
    summary: "Get Lfq",
  })
  @get()
  static getLfq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfq",
  })
  @post("{id}")
  static createLfq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
