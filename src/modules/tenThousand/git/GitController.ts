import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gits")
export default class GitController {
  @operation({
    summary: "Get Gits",
  })
  @get()
  static getGits = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Git",
  })
  @post("{id}")
  static createGit = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
