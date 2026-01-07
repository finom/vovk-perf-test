import { procedure, prefix, get, post, operation } from "vovk";

@prefix("git")
export default class GitController {
  @operation({
    summary: "Get Git",
  })
  @get()
  static getGit = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Git",
  })
  @post("{id}")
  static createGit = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
