import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpv")
export default class DpvController {
  @operation({
    summary: "Get Dpv",
  })
  @get()
  static getDpv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpv",
  })
  @post("{id}")
  static createDpv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
