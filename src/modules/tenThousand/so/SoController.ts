import { procedure, prefix, get, post, operation } from "vovk";

@prefix("so")
export default class SoController {
  @operation({
    summary: "Get So",
  })
  @get()
  static getSo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create So",
  })
  @post("{id}")
  static createSo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
