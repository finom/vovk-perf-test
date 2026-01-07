import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxq")
export default class CxqController {
  @operation({
    summary: "Get Cxq",
  })
  @get()
  static getCxq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxq",
  })
  @post("{id}")
  static createCxq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
