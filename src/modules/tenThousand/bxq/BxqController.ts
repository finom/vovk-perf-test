import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxq")
export default class BxqController {
  @operation({
    summary: "Get Bxq",
  })
  @get()
  static getBxq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxq",
  })
  @post("{id}")
  static createBxq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
