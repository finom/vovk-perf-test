import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxz")
export default class BxzController {
  @operation({
    summary: "Get Bxz",
  })
  @get()
  static getBxz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxz",
  })
  @post("{id}")
  static createBxz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
