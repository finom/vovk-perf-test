import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixn")
export default class IxnController {
  @operation({
    summary: "Get Ixn",
  })
  @get()
  static getIxn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixn",
  })
  @post("{id}")
  static createIxn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
