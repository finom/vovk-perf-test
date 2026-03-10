import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cfx")
export default class CfxController {
  @operation({
    summary: "Get Cfx",
  })
  @get()
  static getCfx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cfx",
  })
  @post("{id}")
  static createCfx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
