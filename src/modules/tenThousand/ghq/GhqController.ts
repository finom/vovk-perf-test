import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghq")
export default class GhqController {
  @operation({
    summary: "Get Ghq",
  })
  @get()
  static getGhq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghq",
  })
  @post("{id}")
  static createGhq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
