import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixg")
export default class IxgController {
  @operation({
    summary: "Get Ixg",
  })
  @get()
  static getIxg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixg",
  })
  @post("{id}")
  static createIxg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
