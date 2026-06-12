import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cfn")
export default class CfnController {
  @operation({
    summary: "Get Cfn",
  })
  @get()
  static getCfn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cfn",
  })
  @post("{id}")
  static createCfn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
