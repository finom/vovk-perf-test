import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cfr")
export default class CfrController {
  @operation({
    summary: "Get Cfr",
  })
  @get()
  static getCfr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cfr",
  })
  @post("{id}")
  static createCfr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
