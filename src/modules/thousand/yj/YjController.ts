import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yj")
export default class YjController {
  @operation({
    summary: "Get Yj",
  })
  @get()
  static getYj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yj",
  })
  @post("{id}")
  static createYj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
