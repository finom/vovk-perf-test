import { procedure, prefix, get, post, operation } from "vovk";

@prefix("go")
export default class GoController {
  @operation({
    summary: "Get Go",
  })
  @get()
  static getGo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Go",
  })
  @post("{id}")
  static createGo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
