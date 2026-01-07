import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntm")
export default class NtmController {
  @operation({
    summary: "Get Ntm",
  })
  @get()
  static getNtm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ntm",
  })
  @post("{id}")
  static createNtm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
