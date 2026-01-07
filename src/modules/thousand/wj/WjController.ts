import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wj")
export default class WjController {
  @operation({
    summary: "Get Wj",
  })
  @get()
  static getWj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wj",
  })
  @post("{id}")
  static createWj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
