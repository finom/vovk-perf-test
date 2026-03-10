import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cfh")
export default class CfhController {
  @operation({
    summary: "Get Cfh",
  })
  @get()
  static getCfh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cfh",
  })
  @post("{id}")
  static createCfh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
