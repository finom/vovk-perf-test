import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntg")
export default class NtgController {
  @operation({
    summary: "Get Ntg",
  })
  @get()
  static getNtg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ntg",
  })
  @post("{id}")
  static createNtg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
