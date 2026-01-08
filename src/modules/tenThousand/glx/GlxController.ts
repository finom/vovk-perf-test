import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("glx")
export default class GlxController {
  @operation({
    summary: "Get Glx",
  })
  @get()
  static getGlx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glx",
  })
  @post("{id}")
  static createGlx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
