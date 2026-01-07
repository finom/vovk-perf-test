import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yc")
export default class YcController {
  @operation({
    summary: "Get Yc",
  })
  @get()
  static getYc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yc",
  })
  @post("{id}")
  static createYc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
