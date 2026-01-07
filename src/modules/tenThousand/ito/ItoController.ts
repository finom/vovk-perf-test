import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ito")
export default class ItoController {
  @operation({
    summary: "Get Ito",
  })
  @get()
  static getIto = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ito",
  })
  @post("{id}")
  static createIto = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
