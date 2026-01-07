import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yg")
export default class YgController {
  @operation({
    summary: "Get Yg",
  })
  @get()
  static getYg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yg",
  })
  @post("{id}")
  static createYg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
