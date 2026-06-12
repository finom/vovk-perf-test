import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gfg")
export default class GfgController {
  @operation({
    summary: "Get Gfg",
  })
  @get()
  static getGfg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gfg",
  })
  @post("{id}")
  static createGfg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
