import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwg")
export default class CwgController {
  @operation({
    summary: "Get Cwg",
  })
  @get()
  static getCwg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwg",
  })
  @post("{id}")
  static createCwg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
