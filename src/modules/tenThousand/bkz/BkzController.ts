import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bkz")
export default class BkzController {
  @operation({
    summary: "Get Bkz",
  })
  @get()
  static getBkz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkz",
  })
  @post("{id}")
  static createBkz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
