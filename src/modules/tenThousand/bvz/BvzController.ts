import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bvz")
export default class BvzController {
  @operation({
    summary: "Get Bvz",
  })
  @get()
  static getBvz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvz",
  })
  @post("{id}")
  static createBvz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
