import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cfp")
export default class CfpController {
  @operation({
    summary: "Get Cfp",
  })
  @get()
  static getCfp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cfp",
  })
  @post("{id}")
  static createCfp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
