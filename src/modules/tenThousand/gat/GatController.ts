import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gat")
export default class GatController {
  @operation({
    summary: "Get Gat",
  })
  @get()
  static getGat = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gat",
  })
  @post("{id}")
  static createGat = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
