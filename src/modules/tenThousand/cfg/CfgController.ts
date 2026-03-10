import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cfg")
export default class CfgController {
  @operation({
    summary: "Get Cfg",
  })
  @get()
  static getCfg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cfg",
  })
  @post("{id}")
  static createCfg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
