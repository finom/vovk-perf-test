import { procedure, prefix, get, post, operation } from "vovk";

@prefix("feq")
export default class FeqController {
  @operation({
    summary: "Get Feq",
  })
  @get()
  static getFeq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Feq",
  })
  @post("{id}")
  static createFeq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
