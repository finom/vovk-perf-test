import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bm")
export default class BmController {
  @operation({
    summary: "Get Bm",
  })
  @get()
  static getBm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bm",
  })
  @post("{id}")
  static createBm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
