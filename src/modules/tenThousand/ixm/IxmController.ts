import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixm")
export default class IxmController {
  @operation({
    summary: "Get Ixm",
  })
  @get()
  static getIxm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixm",
  })
  @post("{id}")
  static createIxm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
