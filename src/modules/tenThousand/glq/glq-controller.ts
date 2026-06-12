import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("glq")
export default class GlqController {
  @operation({
    summary: "Get Glq",
  })
  @get()
  static getGlq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Glq",
  })
  @post("{id}")
  static createGlq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
