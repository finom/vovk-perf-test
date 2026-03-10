import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mlm")
export default class MlmController {
  @operation({
    summary: "Get Mlm",
  })
  @get()
  static getMlm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mlm",
  })
  @post("{id}")
  static createMlm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
