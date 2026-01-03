import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iugs")
export default class IugController {
  @operation({
    summary: "Get Iugs",
  })
  @get()
  static getIugs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iug",
  })
  @post("{id}")
  static createIug = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
