import { procedure, prefix, get, post, operation } from "vovk";

@prefix("va")
export default class VaController {
  @operation({
    summary: "Get Va",
  })
  @get()
  static getVa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Va",
  })
  @post("{id}")
  static createVa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
