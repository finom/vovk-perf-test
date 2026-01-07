import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gev")
export default class GevController {
  @operation({
    summary: "Get Gev",
  })
  @get()
  static getGev = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gev",
  })
  @post("{id}")
  static createGev = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
