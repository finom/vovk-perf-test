import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nlz")
export default class NlzController {
  @operation({
    summary: "Get Nlz",
  })
  @get()
  static getNlz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nlz",
  })
  @post("{id}")
  static createNlz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
