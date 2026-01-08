import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxb")
export default class BxbController {
  @operation({
    summary: "Get Bxb",
  })
  @get()
  static getBxb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxb",
  })
  @post("{id}")
  static createBxb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
