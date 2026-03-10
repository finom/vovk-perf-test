import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nbi")
export default class NbiController {
  @operation({
    summary: "Get Nbi",
  })
  @get()
  static getNbi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nbi",
  })
  @post("{id}")
  static createNbi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
