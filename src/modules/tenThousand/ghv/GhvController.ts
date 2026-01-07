import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghv")
export default class GhvController {
  @operation({
    summary: "Get Ghv",
  })
  @get()
  static getGhv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghv",
  })
  @post("{id}")
  static createGhv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
