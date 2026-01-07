import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chw")
export default class ChwController {
  @operation({
    summary: "Get Chw",
  })
  @get()
  static getChw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chw",
  })
  @post("{id}")
  static createChw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
