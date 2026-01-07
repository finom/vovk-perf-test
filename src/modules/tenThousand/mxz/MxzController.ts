import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxz")
export default class MxzController {
  @operation({
    summary: "Get Mxz",
  })
  @get()
  static getMxz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxz",
  })
  @post("{id}")
  static createMxz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
