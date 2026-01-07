import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxd")
export default class CxdController {
  @operation({
    summary: "Get Cxd",
  })
  @get()
  static getCxd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxd",
  })
  @post("{id}")
  static createCxd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
