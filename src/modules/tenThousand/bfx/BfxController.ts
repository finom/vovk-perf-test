import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bfx")
export default class BfxController {
  @operation({
    summary: "Get Bfx",
  })
  @get()
  static getBfx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfx",
  })
  @post("{id}")
  static createBfx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
