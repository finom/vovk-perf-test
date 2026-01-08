import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("blt")
export default class BltController {
  @operation({
    summary: "Get Blt",
  })
  @get()
  static getBlt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Blt",
  })
  @post("{id}")
  static createBlt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
