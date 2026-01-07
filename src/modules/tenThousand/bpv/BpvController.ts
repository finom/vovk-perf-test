import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpv")
export default class BpvController {
  @operation({
    summary: "Get Bpv",
  })
  @get()
  static getBpv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpv",
  })
  @post("{id}")
  static createBpv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
