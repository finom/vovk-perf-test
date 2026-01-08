import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bvh")
export default class BvhController {
  @operation({
    summary: "Get Bvh",
  })
  @get()
  static getBvh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvh",
  })
  @post("{id}")
  static createBvh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
