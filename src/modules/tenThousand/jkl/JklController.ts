import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkls")
export default class JklController {
  @operation({
    summary: "Get Jkls",
  })
  @get()
  static getJkls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jkl",
  })
  @post("{id}")
  static createJkl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
