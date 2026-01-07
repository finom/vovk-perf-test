import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntc")
export default class NtcController {
  @operation({
    summary: "Get Ntc",
  })
  @get()
  static getNtc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ntc",
  })
  @post("{id}")
  static createNtc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
