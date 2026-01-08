import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("glv")
export default class GlvController {
  @operation({
    summary: "Get Glv",
  })
  @get()
  static getGlv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glv",
  })
  @post("{id}")
  static createGlv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
