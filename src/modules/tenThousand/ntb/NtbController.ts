import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntb")
export default class NtbController {
  @operation({
    summary: "Get Ntb",
  })
  @get()
  static getNtb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ntb",
  })
  @post("{id}")
  static createNtb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
