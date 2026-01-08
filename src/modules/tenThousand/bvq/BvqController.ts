import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bvq")
export default class BvqController {
  @operation({
    summary: "Get Bvq",
  })
  @get()
  static getBvq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvq",
  })
  @post("{id}")
  static createBvq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
