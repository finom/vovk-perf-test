import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntf")
export default class NtfController {
  @operation({
    summary: "Get Ntf",
  })
  @get()
  static getNtf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ntf",
  })
  @post("{id}")
  static createNtf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
