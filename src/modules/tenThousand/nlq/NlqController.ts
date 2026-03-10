import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nlq")
export default class NlqController {
  @operation({
    summary: "Get Nlq",
  })
  @get()
  static getNlq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nlq",
  })
  @post("{id}")
  static createNlq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
