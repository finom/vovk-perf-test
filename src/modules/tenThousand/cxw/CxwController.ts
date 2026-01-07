import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxw")
export default class CxwController {
  @operation({
    summary: "Get Cxw",
  })
  @get()
  static getCxw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxw",
  })
  @post("{id}")
  static createCxw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
