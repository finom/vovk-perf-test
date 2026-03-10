import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ntd")
export default class NtdController {
  @operation({
    summary: "Get Ntd",
  })
  @get()
  static getNtd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ntd",
  })
  @post("{id}")
  static createNtd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
