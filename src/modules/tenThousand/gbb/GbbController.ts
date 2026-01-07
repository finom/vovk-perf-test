import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbb")
export default class GbbController {
  @operation({
    summary: "Get Gbb",
  })
  @get()
  static getGbb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbb",
  })
  @post("{id}")
  static createGbb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
