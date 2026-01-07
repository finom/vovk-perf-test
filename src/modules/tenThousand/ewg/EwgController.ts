import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewg")
export default class EwgController {
  @operation({
    summary: "Get Ewg",
  })
  @get()
  static getEwg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewg",
  })
  @post("{id}")
  static createEwg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
