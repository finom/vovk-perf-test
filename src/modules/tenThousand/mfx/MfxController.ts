import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mfx")
export default class MfxController {
  @operation({
    summary: "Get Mfx",
  })
  @get()
  static getMfx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfx",
  })
  @post("{id}")
  static createMfx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
