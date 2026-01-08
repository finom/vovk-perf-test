import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("byw")
export default class BywController {
  @operation({
    summary: "Get Byw",
  })
  @get()
  static getByw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byw",
  })
  @post("{id}")
  static createByw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
