import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayw")
export default class AywController {
  @operation({
    summary: "Get Ayw",
  })
  @get()
  static getAyw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ayw",
  })
  @post("{id}")
  static createAyw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
