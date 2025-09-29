import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bugs")
export default class BugController {
  @operation({
    summary: "Get Bugs",
  })
  @get()
  static getBugs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bug",
  })
  @post("{id}")
  static createBug = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
