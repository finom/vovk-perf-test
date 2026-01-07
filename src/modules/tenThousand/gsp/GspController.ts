import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsp")
export default class GspController {
  @operation({
    summary: "Get Gsp",
  })
  @get()
  static getGsp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsp",
  })
  @post("{id}")
  static createGsp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
