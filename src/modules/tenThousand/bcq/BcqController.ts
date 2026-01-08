import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bcq")
export default class BcqController {
  @operation({
    summary: "Get Bcq",
  })
  @get()
  static getBcq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcq",
  })
  @post("{id}")
  static createBcq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
