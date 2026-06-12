import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("glm")
export default class GlmController {
  @operation({
    summary: "Get Glm",
  })
  @get()
  static getGlm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Glm",
  })
  @post("{id}")
  static createGlm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
