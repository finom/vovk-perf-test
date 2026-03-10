import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kfg")
export default class KfgController {
  @operation({
    summary: "Get Kfg",
  })
  @get()
  static getKfg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kfg",
  })
  @post("{id}")
  static createKfg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
