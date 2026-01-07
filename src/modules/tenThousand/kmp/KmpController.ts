import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmp")
export default class KmpController {
  @operation({
    summary: "Get Kmp",
  })
  @get()
  static getKmp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kmp",
  })
  @post("{id}")
  static createKmp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
