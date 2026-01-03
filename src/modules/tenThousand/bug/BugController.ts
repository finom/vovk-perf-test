import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bugs")
export default class BugController {
  @operation({
    summary: "Get Bugs",
  })
  @get()
  static getBugs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bug",
  })
  @post("{id}")
  static createBug = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
