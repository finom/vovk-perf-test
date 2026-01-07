import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxj")
export default class CxjController {
  @operation({
    summary: "Get Cxj",
  })
  @get()
  static getCxj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxj",
  })
  @post("{id}")
  static createCxj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
