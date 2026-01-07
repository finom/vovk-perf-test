import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmo")
export default class FmoController {
  @operation({
    summary: "Get Fmo",
  })
  @get()
  static getFmo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fmo",
  })
  @post("{id}")
  static createFmo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
