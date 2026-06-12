import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cfm")
export default class CfmController {
  @operation({
    summary: "Get Cfm",
  })
  @get()
  static getCfm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cfm",
  })
  @post("{id}")
  static createCfm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
