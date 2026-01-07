import { procedure, prefix, get, post, operation } from "vovk";

@prefix("git")
export default class GitController {
  @operation({
    summary: "Get Git",
  })
  @get()
  static getGit = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Git",
  })
  @post("{id}")
  static createGit = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
