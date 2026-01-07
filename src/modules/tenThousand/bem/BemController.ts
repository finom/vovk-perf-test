import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bem")
export default class BemController {
  @operation({
    summary: "Get Bem",
  })
  @get()
  static getBem = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bem",
  })
  @post("{id}")
  static createBem = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
