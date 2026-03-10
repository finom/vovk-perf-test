import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ccr")
export default class CcrController {
  @operation({
    summary: "Get Ccr",
  })
  @get()
  static getCcr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ccr",
  })
  @post("{id}")
  static createCcr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
