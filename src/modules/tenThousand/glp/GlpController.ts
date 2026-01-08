import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("glp")
export default class GlpController {
  @operation({
    summary: "Get Glp",
  })
  @get()
  static getGlp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glp",
  })
  @post("{id}")
  static createGlp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
