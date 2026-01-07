import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixh")
export default class IxhController {
  @operation({
    summary: "Get Ixh",
  })
  @get()
  static getIxh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixh",
  })
  @post("{id}")
  static createIxh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
