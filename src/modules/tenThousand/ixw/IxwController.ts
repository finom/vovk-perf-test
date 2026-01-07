import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixw")
export default class IxwController {
  @operation({
    summary: "Get Ixw",
  })
  @get()
  static getIxw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixw",
  })
  @post("{id}")
  static createIxw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
