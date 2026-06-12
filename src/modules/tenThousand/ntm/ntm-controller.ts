import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ntm")
export default class NtmController {
  @operation({
    summary: "Get Ntm",
  })
  @get()
  static getNtm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ntm",
  })
  @post("{id}")
  static createNtm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
