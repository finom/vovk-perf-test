import { procedure, prefix, get, post, operation } from "vovk";

@prefix("max")
export default class MaxController {
  @operation({
    summary: "Get Max",
  })
  @get()
  static getMax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Max",
  })
  @post("{id}")
  static createMax = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
