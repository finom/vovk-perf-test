import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yp")
export default class YpController {
  @operation({
    summary: "Get Yp",
  })
  @get()
  static getYp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yp",
  })
  @post("{id}")
  static createYp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
