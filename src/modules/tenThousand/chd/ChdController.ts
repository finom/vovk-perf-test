import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chd")
export default class ChdController {
  @operation({
    summary: "Get Chd",
  })
  @get()
  static getChd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chd",
  })
  @post("{id}")
  static createChd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
