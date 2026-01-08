import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bvr")
export default class BvrController {
  @operation({
    summary: "Get Bvr",
  })
  @get()
  static getBvr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvr",
  })
  @post("{id}")
  static createBvr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
