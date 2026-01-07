import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixr")
export default class IxrController {
  @operation({
    summary: "Get Ixr",
  })
  @get()
  static getIxr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixr",
  })
  @post("{id}")
  static createIxr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
