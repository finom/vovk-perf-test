import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chh")
export default class ChhController {
  @operation({
    summary: "Get Chh",
  })
  @get()
  static getChh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Chh",
  })
  @post("{id}")
  static createChh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
