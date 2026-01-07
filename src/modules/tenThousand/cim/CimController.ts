import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cim")
export default class CimController {
  @operation({
    summary: "Get Cim",
  })
  @get()
  static getCim = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cim",
  })
  @post("{id}")
  static createCim = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
