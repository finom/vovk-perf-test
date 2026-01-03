import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkgs")
export default class JkgController {
  @operation({
    summary: "Get Jkgs",
  })
  @get()
  static getJkgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jkg",
  })
  @post("{id}")
  static createJkg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
