import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lfx")
export default class LfxController {
  @operation({
    summary: "Get Lfx",
  })
  @get()
  static getLfx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfx",
  })
  @post("{id}")
  static createLfx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
