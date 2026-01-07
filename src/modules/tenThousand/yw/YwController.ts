import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yw")
export default class YwController {
  @operation({
    summary: "Get Yw",
  })
  @get()
  static getYw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yw",
  })
  @post("{id}")
  static createYw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
