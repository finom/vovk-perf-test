import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gso")
export default class GsoController {
  @operation({
    summary: "Get Gso",
  })
  @get()
  static getGso = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gso",
  })
  @post("{id}")
  static createGso = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
