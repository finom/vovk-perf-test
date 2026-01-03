import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zs")
export default class ZController {
  @operation({
    summary: "Get ZS",
  })
  @get()
  static getZS = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Z",
  })
  @post("{id}")
  static createZ = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
