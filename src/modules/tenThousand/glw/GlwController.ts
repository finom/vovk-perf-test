import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("glw")
export default class GlwController {
  @operation({
    summary: "Get Glw",
  })
  @get()
  static getGlw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Glw",
  })
  @post("{id}")
  static createGlw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
