import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxz")
export default class CxzController {
  @operation({
    summary: "Get Cxz",
  })
  @get()
  static getCxz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxz",
  })
  @post("{id}")
  static createCxz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
