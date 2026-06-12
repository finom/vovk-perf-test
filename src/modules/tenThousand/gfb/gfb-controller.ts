import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gfb")
export default class GfbController {
  @operation({
    summary: "Get Gfb",
  })
  @get()
  static getGfb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gfb",
  })
  @post("{id}")
  static createGfb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
