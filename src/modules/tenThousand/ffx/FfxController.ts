import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ffx")
export default class FfxController {
  @operation({
    summary: "Get Ffx",
  })
  @get()
  static getFfx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffx",
  })
  @post("{id}")
  static createFfx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
