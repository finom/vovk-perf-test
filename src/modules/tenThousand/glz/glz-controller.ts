import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("glz")
export default class GlzController {
  @operation({
    summary: "Get Glz",
  })
  @get()
  static getGlz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Glz",
  })
  @post("{id}")
  static createGlz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
