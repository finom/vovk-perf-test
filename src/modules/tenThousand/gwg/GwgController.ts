import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwg")
export default class GwgController {
  @operation({
    summary: "Get Gwg",
  })
  @get()
  static getGwg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwg",
  })
  @post("{id}")
  static createGwg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
