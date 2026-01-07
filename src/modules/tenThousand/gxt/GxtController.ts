import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxt")
export default class GxtController {
  @operation({
    summary: "Get Gxt",
  })
  @get()
  static getGxt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxt",
  })
  @post("{id}")
  static createGxt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
