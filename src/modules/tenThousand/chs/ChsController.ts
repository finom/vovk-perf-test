import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chs")
export default class ChsController {
  @operation({
    summary: "Get Chs",
  })
  @get()
  static getChs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chs",
  })
  @post("{id}")
  static createChs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
