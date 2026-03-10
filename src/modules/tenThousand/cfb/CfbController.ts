import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cfb")
export default class CfbController {
  @operation({
    summary: "Get Cfb",
  })
  @get()
  static getCfb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cfb",
  })
  @post("{id}")
  static createCfb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
