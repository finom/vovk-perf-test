import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yh")
export default class YhController {
  @operation({
    summary: "Get Yh",
  })
  @get()
  static getYh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yh",
  })
  @post("{id}")
  static createYh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
