import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("glc")
export default class GlcController {
  @operation({
    summary: "Get Glc",
  })
  @get()
  static getGlc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glc",
  })
  @post("{id}")
  static createGlc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
