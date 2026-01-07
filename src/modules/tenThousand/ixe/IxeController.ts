import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixe")
export default class IxeController {
  @operation({
    summary: "Get Ixe",
  })
  @get()
  static getIxe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixe",
  })
  @post("{id}")
  static createIxe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
