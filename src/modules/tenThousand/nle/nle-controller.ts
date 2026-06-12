import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nle")
export default class NleController {
  @operation({
    summary: "Get Nle",
  })
  @get()
  static getNle = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nle",
  })
  @post("{id}")
  static createNle = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
