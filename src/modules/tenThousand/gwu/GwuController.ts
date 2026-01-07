import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwu")
export default class GwuController {
  @operation({
    summary: "Get Gwu",
  })
  @get()
  static getGwu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwu",
  })
  @post("{id}")
  static createGwu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
