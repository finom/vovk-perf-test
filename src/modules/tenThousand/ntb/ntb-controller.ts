import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ntb")
export default class NtbController {
  @operation({
    summary: "Get Ntb",
  })
  @get()
  static getNtb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ntb",
  })
  @post("{id}")
  static createNtb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
