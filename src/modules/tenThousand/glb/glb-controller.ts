import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("glb")
export default class GlbController {
  @operation({
    summary: "Get Glb",
  })
  @get()
  static getGlb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Glb",
  })
  @post("{id}")
  static createGlb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
