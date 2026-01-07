import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxg")
export default class CxgController {
  @operation({
    summary: "Get Cxg",
  })
  @get()
  static getCxg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxg",
  })
  @post("{id}")
  static createCxg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
