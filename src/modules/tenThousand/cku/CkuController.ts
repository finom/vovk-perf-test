import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cku")
export default class CkuController {
  @operation({
    summary: "Get Cku",
  })
  @get()
  static getCku = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cku",
  })
  @post("{id}")
  static createCku = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
