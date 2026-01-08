import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bkx")
export default class BkxController {
  @operation({
    summary: "Get Bkx",
  })
  @get()
  static getBkx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkx",
  })
  @post("{id}")
  static createBkx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
