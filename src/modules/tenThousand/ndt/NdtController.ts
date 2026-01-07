import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndt")
export default class NdtController {
  @operation({
    summary: "Get Ndt",
  })
  @get()
  static getNdt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndt",
  })
  @post("{id}")
  static createNdt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
