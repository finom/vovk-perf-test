import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ht")
export default class HtController {
  @operation({
    summary: "Get Ht",
  })
  @get()
  static getHt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ht",
  })
  @post("{id}")
  static createHt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
