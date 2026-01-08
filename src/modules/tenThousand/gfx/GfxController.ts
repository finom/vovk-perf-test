import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gfx")
export default class GfxController {
  @operation({
    summary: "Get Gfx",
  })
  @get()
  static getGfx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfx",
  })
  @post("{id}")
  static createGfx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
