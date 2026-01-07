import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmm")
export default class DmmController {
  @operation({
    summary: "Get Dmm",
  })
  @get()
  static getDmm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmm",
  })
  @post("{id}")
  static createDmm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
