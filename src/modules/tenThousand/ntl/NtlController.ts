import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ntl")
export default class NtlController {
  @operation({
    summary: "Get Ntl",
  })
  @get()
  static getNtl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ntl",
  })
  @post("{id}")
  static createNtl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
