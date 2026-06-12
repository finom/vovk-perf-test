import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cns")
export default class CnsController {
  @operation({
    summary: "Get Cns",
  })
  @get()
  static getCns = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cns",
  })
  @post("{id}")
  static createCns = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
