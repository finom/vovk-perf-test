import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yi")
export default class YiController {
  @operation({
    summary: "Get Yi",
  })
  @get()
  static getYi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yi",
  })
  @post("{id}")
  static createYi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
