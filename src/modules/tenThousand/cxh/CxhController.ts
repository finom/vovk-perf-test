import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxh")
export default class CxhController {
  @operation({
    summary: "Get Cxh",
  })
  @get()
  static getCxh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxh",
  })
  @post("{id}")
  static createCxh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
