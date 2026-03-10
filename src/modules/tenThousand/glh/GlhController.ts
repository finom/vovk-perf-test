import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("glh")
export default class GlhController {
  @operation({
    summary: "Get Glh",
  })
  @get()
  static getGlh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Glh",
  })
  @post("{id}")
  static createGlh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
