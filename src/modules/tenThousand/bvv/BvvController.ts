import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bvv")
export default class BvvController {
  @operation({
    summary: "Get Bvv",
  })
  @get()
  static getBvv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvv",
  })
  @post("{id}")
  static createBvv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
