import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cni")
export default class CniController {
  @operation({
    summary: "Get Cni",
  })
  @get()
  static getCni = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cni",
  })
  @post("{id}")
  static createCni = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
