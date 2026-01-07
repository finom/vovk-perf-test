import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cot")
export default class CotController {
  @operation({
    summary: "Get Cot",
  })
  @get()
  static getCot = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cot",
  })
  @post("{id}")
  static createCot = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
