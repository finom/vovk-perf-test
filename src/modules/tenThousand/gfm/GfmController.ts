import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gfm")
export default class GfmController {
  @operation({
    summary: "Get Gfm",
  })
  @get()
  static getGfm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gfm",
  })
  @post("{id}")
  static createGfm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
