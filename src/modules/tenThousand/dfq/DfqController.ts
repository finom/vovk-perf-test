import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dfq")
export default class DfqController {
  @operation({
    summary: "Get Dfq",
  })
  @get()
  static getDfq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfq",
  })
  @post("{id}")
  static createDfq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
