import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdn")
export default class GdnController {
  @operation({
    summary: "Get Gdn",
  })
  @get()
  static getGdn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdn",
  })
  @post("{id}")
  static createGdn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
