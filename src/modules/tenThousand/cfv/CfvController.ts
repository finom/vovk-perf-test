import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cfv")
export default class CfvController {
  @operation({
    summary: "Get Cfv",
  })
  @get()
  static getCfv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cfv",
  })
  @post("{id}")
  static createCfv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
