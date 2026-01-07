import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gog")
export default class GogController {
  @operation({
    summary: "Get Gog",
  })
  @get()
  static getGog = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gog",
  })
  @post("{id}")
  static createGog = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
