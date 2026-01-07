import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxm")
export default class CxmController {
  @operation({
    summary: "Get Cxm",
  })
  @get()
  static getCxm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxm",
  })
  @post("{id}")
  static createCxm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
