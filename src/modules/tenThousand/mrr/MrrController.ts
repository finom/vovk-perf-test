import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mrr")
export default class MrrController {
  @operation({
    summary: "Get Mrr",
  })
  @get()
  static getMrr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrr",
  })
  @post("{id}")
  static createMrr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
