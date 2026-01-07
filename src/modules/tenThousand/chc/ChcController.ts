import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chc")
export default class ChcController {
  @operation({
    summary: "Get Chc",
  })
  @get()
  static getChc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chc",
  })
  @post("{id}")
  static createChc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
