import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bvb")
export default class BvbController {
  @operation({
    summary: "Get Bvb",
  })
  @get()
  static getBvb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvb",
  })
  @post("{id}")
  static createBvb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
