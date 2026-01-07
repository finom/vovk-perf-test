import { procedure, prefix, get, post, operation } from "vovk";

@prefix("giv")
export default class GivController {
  @operation({
    summary: "Get Giv",
  })
  @get()
  static getGiv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Giv",
  })
  @post("{id}")
  static createGiv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
