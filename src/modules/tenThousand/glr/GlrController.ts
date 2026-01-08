import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("glr")
export default class GlrController {
  @operation({
    summary: "Get Glr",
  })
  @get()
  static getGlr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glr",
  })
  @post("{id}")
  static createGlr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
