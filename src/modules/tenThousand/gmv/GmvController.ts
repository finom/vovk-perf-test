import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmv")
export default class GmvController {
  @operation({
    summary: "Get Gmv",
  })
  @get()
  static getGmv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmv",
  })
  @post("{id}")
  static createGmv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
