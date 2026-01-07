import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hem")
export default class HemController {
  @operation({
    summary: "Get Hem",
  })
  @get()
  static getHem = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hem",
  })
  @post("{id}")
  static createHem = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
