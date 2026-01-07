import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwg")
export default class FwgController {
  @operation({
    summary: "Get Fwg",
  })
  @get()
  static getFwg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwg",
  })
  @post("{id}")
  static createFwg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
