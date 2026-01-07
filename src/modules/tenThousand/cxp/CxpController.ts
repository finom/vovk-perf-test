import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxp")
export default class CxpController {
  @operation({
    summary: "Get Cxp",
  })
  @get()
  static getCxp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxp",
  })
  @post("{id}")
  static createCxp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
