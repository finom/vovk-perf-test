import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmos")
export default class FmoController {
  @operation({
    summary: "Get Fmos",
  })
  @get()
  static getFmos = procedure({
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
