import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nlr")
export default class NlrController {
  @operation({
    summary: "Get Nlr",
  })
  @get()
  static getNlr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nlr",
  })
  @post("{id}")
  static createNlr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
