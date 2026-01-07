import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfo")
export default class GfoController {
  @operation({
    summary: "Get Gfo",
  })
  @get()
  static getGfo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfo",
  })
  @post("{id}")
  static createGfo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
