import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmg")
export default class GmgController {
  @operation({
    summary: "Get Gmg",
  })
  @get()
  static getGmg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmg",
  })
  @post("{id}")
  static createGmg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
