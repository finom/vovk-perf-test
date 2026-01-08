import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bkb")
export default class BkbController {
  @operation({
    summary: "Get Bkb",
  })
  @get()
  static getBkb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkb",
  })
  @post("{id}")
  static createBkb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
