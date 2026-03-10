import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fdr")
export default class FdrController {
  @operation({
    summary: "Get Fdr",
  })
  @get()
  static getFdr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fdr",
  })
  @post("{id}")
  static createFdr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
