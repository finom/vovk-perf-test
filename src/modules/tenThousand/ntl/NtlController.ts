import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
