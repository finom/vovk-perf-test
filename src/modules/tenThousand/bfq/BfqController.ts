import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bfq")
export default class BfqController {
  @operation({
    summary: "Get Bfq",
  })
  @get()
  static getBfq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfq",
  })
  @post("{id}")
  static createBfq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
