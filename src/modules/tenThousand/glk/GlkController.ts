import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("glk")
export default class GlkController {
  @operation({
    summary: "Get Glk",
  })
  @get()
  static getGlk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glk",
  })
  @post("{id}")
  static createGlk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
