import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxb")
export default class CxbController {
  @operation({
    summary: "Get Cxb",
  })
  @get()
  static getCxb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxb",
  })
  @post("{id}")
  static createCxb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
