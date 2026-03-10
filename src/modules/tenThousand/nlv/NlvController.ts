import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nlv")
export default class NlvController {
  @operation({
    summary: "Get Nlv",
  })
  @get()
  static getNlv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nlv",
  })
  @post("{id}")
  static createNlv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
