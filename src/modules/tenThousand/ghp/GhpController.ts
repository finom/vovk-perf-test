import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghp")
export default class GhpController {
  @operation({
    summary: "Get Ghp",
  })
  @get()
  static getGhp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghp",
  })
  @post("{id}")
  static createGhp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
