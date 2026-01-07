import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfu")
export default class DfuController {
  @operation({
    summary: "Get Dfu",
  })
  @get()
  static getDfu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfu",
  })
  @post("{id}")
  static createDfu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
