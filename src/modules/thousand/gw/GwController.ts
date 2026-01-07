import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gw")
export default class GwController {
  @operation({
    summary: "Get Gw",
  })
  @get()
  static getGw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gw",
  })
  @post("{id}")
  static createGw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
