import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntd")
export default class NtdController {
  @operation({
    summary: "Get Ntd",
  })
  @get()
  static getNtd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ntd",
  })
  @post("{id}")
  static createNtd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
