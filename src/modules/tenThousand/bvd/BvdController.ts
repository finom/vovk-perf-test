import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bvd")
export default class BvdController {
  @operation({
    summary: "Get Bvd",
  })
  @get()
  static getBvd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvd",
  })
  @post("{id}")
  static createBvd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
