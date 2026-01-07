import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxr")
export default class CxrController {
  @operation({
    summary: "Get Cxr",
  })
  @get()
  static getCxr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxr",
  })
  @post("{id}")
  static createCxr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
