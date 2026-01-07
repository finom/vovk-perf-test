import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zo")
export default class ZoController {
  @operation({
    summary: "Get Zo",
  })
  @get()
  static getZo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zo",
  })
  @post("{id}")
  static createZo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
