import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxy")
export default class BxyController {
  @operation({
    summary: "Get Bxy",
  })
  @get()
  static getBxy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxy",
  })
  @post("{id}")
  static createBxy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
