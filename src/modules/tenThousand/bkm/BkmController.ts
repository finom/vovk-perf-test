import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bkm")
export default class BkmController {
  @operation({
    summary: "Get Bkm",
  })
  @get()
  static getBkm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkm",
  })
  @post("{id}")
  static createBkm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
