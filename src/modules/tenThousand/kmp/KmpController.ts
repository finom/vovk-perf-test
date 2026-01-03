import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmps")
export default class KmpController {
  @operation({
    summary: "Get Kmps",
  })
  @get()
  static getKmps = procedure({
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
